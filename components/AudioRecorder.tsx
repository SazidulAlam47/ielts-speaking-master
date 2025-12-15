import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MicrophoneIcon, StopIcon } from '@heroicons/react/24/solid';

interface AudioRecorderProps {
  onRecordingComplete: (blob: Blob) => void;
  isAutoStart?: boolean;
  showTimer?: boolean;
  stopSignal?: boolean;
  disabled?: boolean;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({ 
  onRecordingComplete, 
  isAutoStart = false, 
  showTimer = true, 
  stopSignal = false,
  disabled = false
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  // Use a ref for the callback to ensure the latest version is always called
  // without triggering effect cleanups that would stop the recording.
  const onRecordingCompleteRef = useRef(onRecordingComplete);
  
  useEffect(() => {
    onRecordingCompleteRef.current = onRecordingComplete;
  }, [onRecordingComplete]);

  const cleanupMedia = useCallback(() => {
      if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
          streamRef.current = null;
      }
  }, []);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream, {
          mimeType: MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4'
      });

      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        // Call the ref instead of the prop directly
        onRecordingCompleteRef.current(blob);
        cleanupMedia();
      };

      mediaRecorder.start();
      setIsRecording(true);
      
      timerRef.current = window.setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);

    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Could not access microphone. Please allow permissions.");
    }
  }, [cleanupMedia]); // Removed onRecordingComplete from dependencies

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [isRecording]);

  // Effect for Auto-start
  useEffect(() => {
    if (isAutoStart && !disabled && !isRecording) {
      startRecording();
    }
  }, [isAutoStart, disabled, isRecording, startRecording]);

  // Effect for Cleanup (Unmount)
  useEffect(() => {
    return () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
        cleanupMedia();
    };
  }, [cleanupMedia]);

  // Watch for stop signal
  useEffect(() => {
    if (stopSignal && isRecording) {
        stopRecording();
    }
  }, [stopSignal, isRecording, stopRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${isRecording ? 'bg-red-100 animate-pulse' : disabled ? 'bg-gray-200' : 'bg-gray-100'}`}>
        {isRecording ? (
          <MicrophoneIcon className="h-10 w-10 text-red-600" />
        ) : (
          <MicrophoneIcon className={`h-10 w-10 ${disabled ? 'text-gray-400' : 'text-gray-500'}`} />
        )}
      </div>

      {showTimer && (
        <div className="text-2xl font-mono font-bold text-gray-700">
          {formatTime(elapsedTime)}
        </div>
      )}

      {!isRecording ? (
        <button
          onClick={startRecording}
          disabled={disabled}
          className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
            disabled 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          <MicrophoneIcon className="h-5 w-5" />
          {disabled ? "Examiner is speaking..." : "Start Recording"}
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="px-6 py-2 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition-colors flex items-center gap-2"
        >
          <StopIcon className="h-5 w-5" />
          Stop & Submit
        </button>
      )}
    </div>
  );
};

export default AudioRecorder;