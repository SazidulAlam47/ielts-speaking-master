import React, { useState, useEffect, useCallback, useRef } from "react";
import {
    TestMode,
    TestPhase,
    AudioRecording,
    EvaluationResult,
    TestContent,
} from "./types";
import { TESTS } from "./constants";
import AudioRecorder from "./components/AudioRecorder";
import TestResult from "./components/TestResult";
import { evaluateTest } from "./services/geminiService";
import {
    SpeakerWaveIcon,
    PlayCircleIcon,
    ClockIcon,
} from "@heroicons/react/24/outline";

function App() {
    const [testMode, setTestMode] = useState<TestMode>(TestMode.FULL);
    const [phase, setPhase] = useState<TestPhase>(TestPhase.WELCOME);

    // Content State
    const [testContent, setTestContent] = useState<TestContent>(TESTS[0]); // Default init

    const [currentPart1Index, setCurrentPart1Index] = useState(0);
    const [currentPart3PartIndex, setCurrentPart3PartIndex] = useState(0); // Which sub-topic in Part 3
    const [currentPart3QuestionIndex, setCurrentPart3QuestionIndex] =
        useState(0); // Which question in sub-topic
    const [recordings, setRecordings] = useState<AudioRecording[]>([]);
    const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
    const [timer, setTimer] = useState(0); // Used for prep time in Part 2 and answering time
    const [isPreparingAudio, setIsPreparingAudio] = useState(false);

    // Track phase in ref to handle async speech cancellation reliably
    const phaseRef = useRef(phase);

    // 1. Update phaseRef immediately when phase changes
    useEffect(() => {
        phaseRef.current = phase;
    }, [phase]);

    // Ref for audio timeout to clear it if needed
    const audioTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // --- TTS Helper ---
    const speak = useCallback(
        (
            text: string,
            options: { onEnd?: () => void; immediate?: boolean } = {}
        ) => {
            const { onEnd, immediate } = options;

            // Clear any pending audio start
            if (audioTimeoutRef.current) {
                clearTimeout(audioTimeoutRef.current);
                audioTimeoutRef.current = null;
            }

            // Cancel any current speaking
            window.speechSynthesis.cancel();

            const executeSpeech = () => {
                // Double check phase before speaking
                if (phaseRef.current === TestPhase.WELCOME) {
                    setIsPreparingAudio(false);
                    return;
                }

                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = "en-GB"; // IELTS is British usually
                utterance.rate = 0.9; // Slightly slower for clarity

                utterance.onend = () => {
                    if (onEnd) onEnd();
                };

                utterance.onerror = () => {
                    // Handle errors gracefully
                    setIsPreparingAudio(false);
                };

                window.speechSynthesis.speak(utterance);
                setIsPreparingAudio(false);
            };

            setIsPreparingAudio(true);

            if (immediate) {
                executeSpeech();
            } else {
                // 3.5-second delay before speaking to allow for connection issues and ensure start is not clipped
                audioTimeoutRef.current = setTimeout(executeSpeech, 3500);
            }
        },
        []
    );

    // --- Auto-Speak Effect ---
    // Triggers whenever the test phase or current question indices change
    useEffect(() => {
        let textToSpeak = "";

        if (phase === TestPhase.PART_1 && testContent.part1) {
            // Safety check for index
            if (currentPart1Index < testContent.part1.questions.length) {
                textToSpeak = testContent.part1.questions[currentPart1Index];
            }
        } else if (phase === TestPhase.PART_3 && testContent.part3) {
            const subTopic = testContent.part3[currentPart3PartIndex];
            if (
                subTopic &&
                currentPart3QuestionIndex < subTopic.questions.length
            ) {
                textToSpeak = subTopic.questions[currentPart3QuestionIndex];
            }
        }

        if (textToSpeak) {
            speak(textToSpeak); // Default behavior: wait 5s
        }
    }, [
        phase,
        currentPart1Index,
        currentPart3PartIndex,
        currentPart3QuestionIndex,
        testContent,
        speak,
    ]);

    const handleCancelTest = () => {
        if (audioTimeoutRef.current) {
            clearTimeout(audioTimeoutRef.current);
            audioTimeoutRef.current = null;
        }
        window.speechSynthesis.cancel();
        setIsPreparingAudio(false);
        setPhase(TestPhase.WELCOME);
    };

    // --- Navigation & Logic ---

    const startTest = (mode: TestMode) => {
        setTestMode(mode);
        setRecordings([]);
        setEvaluation(null);

        // Pick a random test
        const randomTest = TESTS[Math.floor(Math.random() * TESTS.length)];
        setTestContent(randomTest);

        if (mode === TestMode.PART1 || mode === TestMode.FULL) {
            setCurrentPart1Index(0);
            setPhase(TestPhase.PART_1);
            // speak() is now handled by useEffect
        } else if (mode === TestMode.PART2) {
            setPhase(TestPhase.PART_2_PREP);
        } else if (mode === TestMode.PART3) {
            setCurrentPart3PartIndex(0);
            setCurrentPart3QuestionIndex(0);
            setPhase(TestPhase.PART_3);
            // speak() is now handled by useEffect
        }
    };

    const handlePart1Next = (blob: Blob) => {
        const question = testContent.part1.questions[currentPart1Index];
        setRecordings((prev) => [
            ...prev,
            { part: "Part 1", blob, questionContext: question },
        ]);

        if (currentPart1Index < testContent.part1.questions.length - 1) {
            const nextIndex = currentPart1Index + 1;
            setCurrentPart1Index(nextIndex);
            // speak() handled by useEffect
        } else {
            // Part 1 Done
            if (testMode === TestMode.PART1) {
                finishTest();
            } else {
                setPhase(TestPhase.PART_2_PREP);
            }
        }
    };

    // Manage Timers for Prep and Long Turn
    useEffect(() => {
        let interval: number;

        if (phase === TestPhase.PART_2_PREP) {
            setTimer(60); // 1 minute prep
            interval = window.setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        setPhase(TestPhase.PART_2_ANSWER);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else if (phase === TestPhase.PART_2_ANSWER) {
            setTimer(120); // 2 minutes max for Long Turn
            interval = window.setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 0) return 0;
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [phase]);

    const handlePart2Complete = (blob: Blob) => {
        setRecordings((prev) => [
            ...prev,
            {
                part: "Part 2",
                blob,
                questionContext: `Topic: ${
                    testContent.part2.topic
                }. Points: ${testContent.part2.bullets.join(", ")}`,
            },
        ]);

        if (testMode === TestMode.PART2) {
            finishTest();
        } else {
            setCurrentPart3PartIndex(0);
            setCurrentPart3QuestionIndex(0);
            setPhase(TestPhase.PART_3);
            // speak() handled by useEffect
        }
    };

    const handlePart3Next = (blob: Blob) => {
        const currentSubTopic = testContent.part3[currentPart3PartIndex];
        const question = currentSubTopic.questions[currentPart3QuestionIndex];

        setRecordings((prev) => [
            ...prev,
            { part: "Part 3", blob, questionContext: question },
        ]);

        // Logic to move to next question or next subtopic
        if (currentPart3QuestionIndex < currentSubTopic.questions.length - 1) {
            // Next question in same topic
            const nextQIndex = currentPart3QuestionIndex + 1;
            setCurrentPart3QuestionIndex(nextQIndex);
            // speak() handled by useEffect
        } else if (currentPart3PartIndex < testContent.part3.length - 1) {
            // Next topic
            const nextTopicIndex = currentPart3PartIndex + 1;
            setCurrentPart3PartIndex(nextTopicIndex);
            setCurrentPart3QuestionIndex(0);
            // speak() handled by useEffect
        } else {
            // Part 3 Done
            finishTest();
        }
    };

    const finishTest = () => {
        setPhase(TestPhase.EVALUATING);
    };

    // Determine correct list of recordings to send
    useEffect(() => {
        if (
            phase === TestPhase.EVALUATING &&
            recordings.length > 0 &&
            !evaluation
        ) {
            evaluateTest(recordings)
                .then((res) => {
                    setEvaluation(res);
                    setPhase(TestPhase.RESULTS);
                })
                .catch((err) => {
                    console.error(err);
                    alert("Error during AI evaluation.");
                    setPhase(TestPhase.WELCOME);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phase, recordings, evaluation]);

    // --- Render Views ---

    if (phase === TestPhase.WELCOME) {
        return (
            <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4 bg-gradient-to-br from-red-50 to-gray-100">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-lg w-full text-center border-t-4 border-red-600">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                        IELTS Speaking Master
                    </h1>
                    <p className="text-gray-500 mb-8">
                        Sample Test | AI Evaluator
                    </p>

                    <div className="space-y-4">
                        <p className="text-lg font-medium text-gray-700 mb-4">
                            Select a Test Mode:
                        </p>
                        <button
                            onClick={() => startTest(TestMode.PART1)}
                            className="w-full py-3 px-4 bg-white border-2 border-gray-200 rounded-lg hover:border-red-500 hover:text-red-600 transition font-semibold text-gray-600"
                        >
                            Part 1 Only (Introduction)
                        </button>
                        <button
                            onClick={() => startTest(TestMode.PART2)}
                            className="w-full py-3 px-4 bg-white border-2 border-gray-200 rounded-lg hover:border-red-500 hover:text-red-600 transition font-semibold text-gray-600"
                        >
                            Part 2 Only (Long Turn)
                        </button>
                        <button
                            onClick={() => startTest(TestMode.PART3)}
                            className="w-full py-3 px-4 bg-white border-2 border-gray-200 rounded-lg hover:border-red-500 hover:text-red-600 transition font-semibold text-gray-600"
                        >
                            Part 3 Only (Discussion)
                        </button>
                        <button
                            onClick={() => startTest(TestMode.FULL)}
                            className="w-full py-4 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-bold shadow-lg transform hover:-translate-y-1"
                        >
                            Start Full Test (Part 1 - 3)
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (phase === TestPhase.RESULTS && evaluation) {
        return (
            <TestResult
                result={evaluation}
                onRestart={() => setPhase(TestPhase.WELCOME)}
                isFullTest={testMode === TestMode.FULL}
            />
        );
    }

    if (phase === TestPhase.EVALUATING) {
        return (
            <div className="min-h-[100dvh] flex items-center justify-center bg-gray-50 p-4">
                <div className="text-center animate-pulse">
                    <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                        Analyzing your responses...
                    </h2>
                    <p className="text-gray-500">
                        Comparing with band descriptors
                    </p>
                </div>
            </div>
        );
    }

    // --- Active Test UI ---

    return (
        <div className="min-h-[100dvh] bg-gray-50 p-4 md:p-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col">
                {/* Header */}
                <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
                    <span
                        onClick={handleCancelTest}
                        className="font-bold tracking-wider cursor-pointer hover:text-red-400 transition-colors text-sm md:text-base"
                        title="Click to cancel test and return to menu"
                    >
                        IELTS SPEAKING
                    </span>
                    <span className="text-xs md:text-sm bg-gray-700 px-3 py-1 rounded-full">
                        {phase.replace(/_/g, " ")}
                    </span>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-4 md:p-8 flex flex-col items-center justify-center text-center">
                    {phase === TestPhase.PART_1 && testContent.part1 && (
                        <div className="w-full max-w-lg">
                            <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-6 uppercase tracking-widest">
                                Part 1: Interview
                            </h3>
                            <div className="mb-4">
                                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded uppercase tracking-wide">
                                    Topic: {testContent.part1.topic}
                                </span>
                            </div>
                            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-relaxed">
                                "
                                {testContent.part1.questions[currentPart1Index]}
                                "
                            </p>

                            {isPreparingAudio && (
                                <div className="mb-6 flex items-center justify-center gap-2 text-gray-500 animate-pulse text-sm">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animation-delay-200"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animation-delay-400"></div>
                                    Examiner is preparing to speak...
                                </div>
                            )}

                            <AudioRecorder
                                onRecordingComplete={handlePart1Next}
                            />
                        </div>
                    )}

                    {phase === TestPhase.PART_2_PREP && testContent.part2 && (
                        <div className="w-full text-left">
                            <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-4 uppercase tracking-widest text-center">
                                Part 2: Preparation
                            </h3>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 md:p-6 mb-8 rounded-r-lg">
                                <p className="font-bold text-lg mb-2">
                                    {testContent.part2.topic}
                                </p>
                                <p className="text-sm text-gray-600 mb-4 italic">
                                    You should say:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm md:text-base">
                                    {testContent.part2.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-500 mb-2">
                                    Preparation Time Remaining
                                </p>
                                <div className="text-4xl md:text-5xl font-mono font-bold text-gray-900 flex items-center justify-center gap-2">
                                    <ClockIcon className="h-8 w-8 md:h-10 md:w-10 text-gray-400" />
                                    {timer}s
                                </div>
                                <button
                                    onClick={() =>
                                        setPhase(TestPhase.PART_2_ANSWER)
                                    }
                                    className="mt-8 text-sm text-red-600 underline hover:text-red-800"
                                >
                                    Skip Timer
                                </button>
                            </div>
                        </div>
                    )}

                    {phase === TestPhase.PART_2_ANSWER && testContent.part2 && (
                        <div className="w-full text-left">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg md:text-xl font-semibold text-red-600 uppercase tracking-widest text-center flex-1">
                                    Part 2: Long Turn
                                </h3>
                                <div className="flex items-center gap-2 text-red-600 font-mono text-lg md:text-xl font-bold border border-red-200 px-3 py-1 rounded bg-red-50">
                                    <ClockIcon className="h-5 w-5 md:h-6 md:w-6" />
                                    {Math.floor(timer / 60)}:
                                    {(timer % 60).toString().padStart(2, "0")}
                                </div>
                            </div>

                            <div className="bg-gray-50 border p-4 mb-8 rounded-lg opacity-75">
                                <p className="font-bold mb-2">
                                    {testContent.part2.topic}
                                </p>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
                                    {testContent.part2.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <AudioRecorder
                                    onRecordingComplete={handlePart2Complete}
                                    showTimer={false}
                                />
                            </div>
                            <p className="text-center text-xs text-gray-400 mt-4">
                                Speak for 1-2 minutes until the examiner stops
                                you (or click stop)
                            </p>
                        </div>
                    )}

                    {phase === TestPhase.PART_3 && testContent.part3 && (
                        <div className="w-full max-w-lg">
                            <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-2 uppercase tracking-widest">
                                Part 3: Discussion
                            </h3>
                            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded mb-6">
                                Topic:{" "}
                                {testContent.part3[currentPart3PartIndex].topic}
                            </span>
                            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-relaxed">
                                "
                                {
                                    testContent.part3[currentPart3PartIndex]
                                        .questions[currentPart3QuestionIndex]
                                }
                                "
                            </p>

                            {isPreparingAudio && (
                                <div className="mb-6 flex items-center justify-center gap-2 text-gray-500 animate-pulse text-sm">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animation-delay-200"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animation-delay-400"></div>
                                    Examiner is preparing to speak...
                                </div>
                            )}

                            <AudioRecorder
                                onRecordingComplete={handlePart3Next}
                            />
                        </div>
                    )}
                </div>

                {/* Footer/Progress */}
                <div className="bg-gray-100 p-4 text-center text-xs md:text-sm text-gray-500">
                    {testMode === TestMode.FULL
                        ? "Full Test Mode"
                        : "Practice Mode"}{" "}
                    &bull; AI Powered Assessment
                </div>
            </div>

            <div className="text-center mt-6">
                <button
                    onClick={() =>
                        speak(
                            phase === TestPhase.PART_1
                                ? testContent.part1.questions[currentPart1Index]
                                : phase === TestPhase.PART_3
                                ? testContent.part3[currentPart3PartIndex]
                                      .questions[currentPart3QuestionIndex]
                                : "Please read the card.",
                            { immediate: true }
                        )
                    }
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition text-sm md:text-base"
                >
                    <SpeakerWaveIcon className="h-5 w-5" /> Replay Question
                    Audio
                </button>
            </div>
        </div>
    );
}

export default App;
