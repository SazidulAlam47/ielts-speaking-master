import React, { useState, useRef } from 'react';
import { EvaluationResult, AudioRecording } from '../types';
import { 
  CheckCircleIcon, 
  ArrowLeftIcon, 
  PlayCircleIcon, 
  ExclamationTriangleIcon,
  ArrowDownTrayIcon,
  DocumentArrowDownIcon 
} from '@heroicons/react/24/solid';
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  PolarAngleAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface TestResultProps {
  result: EvaluationResult;
  recordings?: AudioRecording[];
  onRestart: () => void;
  isFullTest?: boolean;
}

// --- HELPER COMPONENTS ---

const ScoreCard: React.FC<{
  title: string;
  score: number;
  feedback: string;
  colorClass: string;
}> = ({ title, score, feedback, colorClass }) => (
  <div
    className={`p-4 rounded-xl border-l-4 bg-white shadow-sm ${
      colorClass.split(' ')[2]
    }`}
  >
    <div className="flex justify-between items-center mb-2 gap-2">
      <h4 className="font-bold text-gray-800 text-base md:text-lg">{title}</h4>
      <span
        className={`px-3 py-1 rounded-full text-xs md:text-sm font-bold whitespace-nowrap flex-shrink-0 ${colorClass}`}
      >
        Band {score}
      </span>
    </div>
    <p className="text-gray-600 text-sm">{feedback}</p>
  </div>
);

// --- VIEW COMPONENTS ---

interface DashboardViewProps {
  result: EvaluationResult;
  isFullTest: boolean;
  isPrinting?: boolean;
  children?: React.ReactNode; 
}

const DashboardView: React.FC<DashboardViewProps> = ({ result, isFullTest, isPrinting = false, children }) => {
  // Safe access helpers
  const getScore = (category: any) => category?.score || 0;
  const getFeedback = (category: any) => category?.feedback || 'No feedback available.';

  const chartData = [
    { name: 'Fluency', score: getScore(result.fluencyCoherence), fill: '#8884d8' },
    { name: 'Lexical', score: getScore(result.lexicalResource), fill: '#83a6ed' },
    { name: 'Grammar', score: getScore(result.grammaticalRange), fill: '#8dd1e1' },
    { name: 'Pronunciation', score: getScore(result.pronunciation), fill: '#82ca9d' },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 7.5) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 6.0) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (score >= 5.0) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const hasPartBreakdown = result.partBreakdown && result.partBreakdown.length > 0;

  return (
    <div className={`max-w-6xl mx-auto ${isPrinting ? 'p-0' : 'p-4 md:p-6'} bg-white ${isPrinting ? '' : 'shadow-xl rounded-2xl my-4 md:my-8'}`}>
      <div className="text-center mb-6 md:mb-8">
        {isPrinting ? (
           <div className="mb-4">
             <h1 className="text-3xl font-bold text-gray-900 mb-2">IELTS Speaking Test Report</h1>
             <div className="text-xl text-gray-800 mt-2 border-2 border-gray-900 inline-block px-6 py-2 rounded-lg">
                Overall Band Score: <span className="font-bold text-gray-900">{result.overallBand || 0}</span>
             </div>
           </div>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Test Complete
            </h2>
            <div className="inline-block p-4 md:p-6 rounded-full bg-red-50 border-4 border-red-100">
              <p className="text-xs md:text-sm uppercase tracking-wide text-gray-500 font-semibold mb-1">
                Overall Band Score
              </p>
              <p className="text-5xl md:text-6xl font-extrabold text-red-600">
                {result.overallBand || 0}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Action Buttons (Hidden when printing) */}
      {!isPrinting && children && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {children}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
        {/* Chart */}
        <div className="h-64 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="90%"
              barSize={20}
              data={chartData}
              startAngle={180}
              endAngle={0}
            >
              <PolarAngleAxis type="number" domain={[0, 9]} tick={false} />
              <RadialBar
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                dataKey="score"
                isAnimationActive={!isPrinting}
              />
              {!isPrinting && <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />}
              {!isPrinting && <Tooltip />}
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* General Feedback */}
        <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-100 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <CheckCircleIcon className="h-5 w-5 text-green-500" />
            General Feedback
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
            "{result.generalFeedback || 'No general feedback provided.'}"
          </p>
        </div>
      </div>

      {/* Breakdown Section */}
      {hasPartBreakdown && isFullTest && (
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
            Full Test Breakdown
          </h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 overflow-x-auto shadow-sm border border-gray-200 rounded-lg self-start w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Part</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Band</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback Summary</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {result.partBreakdown!.map((part, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{part.part}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">{part.band}</td>
                      <td className="px-4 py-4 text-sm text-gray-500 min-w-[200px]">{part.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex-1 w-full bg-white border border-gray-100 rounded-lg p-4 shadow-sm min-h-[300px]">
              <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">Part-wise Performance</h4>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={result.partBreakdown?.map((p) => ({ name: p.part, score: p.band }))}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, 9]} tickCount={10} />
                    {!isPrinting && <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />}
                    <Bar dataKey="score" name="Band Score" fill="#dc2626" radius={[4, 4, 0, 0]} barSize={40} isAnimationActive={!isPrinting} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <ScoreCard title="Fluency & Coherence" score={getScore(result.fluencyCoherence)} feedback={getFeedback(result.fluencyCoherence)} colorClass={getScoreColor(getScore(result.fluencyCoherence))} />
        <ScoreCard title="Lexical Resource" score={getScore(result.lexicalResource)} feedback={getFeedback(result.lexicalResource)} colorClass={getScoreColor(getScore(result.lexicalResource))} />
        <ScoreCard title="Grammatical Range & Accuracy" score={getScore(result.grammaticalRange)} feedback={getFeedback(result.grammaticalRange)} colorClass={getScoreColor(getScore(result.grammaticalRange))} />
        <ScoreCard title="Pronunciation" score={getScore(result.pronunciation)} feedback={getFeedback(result.pronunciation)} colorClass={getScoreColor(getScore(result.pronunciation))} />
      </div>
    </div>
  );
};

interface DetailedReviewProps {
  result: EvaluationResult;
  recordings: AudioRecording[];
  isPrinting?: boolean;
}

const DetailedReview: React.FC<DetailedReviewProps> = ({ result, recordings, isPrinting = false }) => {
  // Mobile: No padding (handled by parent) or minimal. Desktop: p-6.
  // We remove 'p-4' from the mobile class list here because DashboardView (parent context) already might have padding, 
  // or we want it flush on mobile.
  // Actually, TestResult -> DashboardView is a sibling to DetailedReview. TestResult DOES NOT wrap DetailedReview in a pervasive p-4 container ANYMORE?
  // Let's check TestResult:
  // <DashboardView ...> -> has internal padding.
  // <DetailedReview ...> -> is rendered AFTER DashboardView.
  // BUT TestResult return fragment <></>.
  // So DetailedReview is a top level child of the App's container?
  // App.tsx: Result view is returned directly: <TestResult ... />
  // App.tsx wrapper: <div className="min-h-[100dvh] bg-gray-50 p-4 md:p-8"> ... <TestResult ... /> ... </div> ???
  // Wait, App.tsx: if (phase === RESULTS) return <TestResult ... /> -> so it replaces the whole App UI.
  
  // So TestResult is the ROOT for that view.
  // DetailedReview has `max-w-6xl mx-auto ... p-4 md:p-6`. This looks fine usually.
  // "too much padding in left and write". 
  // Maybe the user means inside the cards?
  // The cards have `p-6` (part header) and `p-4` (review item).
  
  // Let's look at the DetailedReview container again.
  // className={`max-w-6xl mx-auto ${isPrinting ? 'p-0 mt-8' : 'p-4 md:p-6 bg-white shadow-xl rounded-2xl my-4 md:my-8 min-h-[80vh]'}`}
  
  // On mobile: `p-4`. Plus `App` might have padding?
  // No, App.tsx replaces the phase content completely.
  
  // Let's try reducing the main container padding on mobile to `p-2` or `p-0` if the children have padding.
  // And the inner cards.
  
  return (
    <div className={`max-w-6xl mx-auto ${isPrinting ? 'p-0 mt-8' : 'py-2 px-1 md:p-6 bg-white shadow-xl rounded-none md:rounded-2xl my-0 md:my-8 min-h-[80vh]'}`}>
      <div className="flex items-center mb-6 border-b pb-4">
        
        <h2 className={`text-2xl font-bold text-gray-800 ${!isPrinting ? 'ml-auto mr-auto' : ''}`}>
          Detailed Review
        </h2>

      </div>

      <div className="space-y-12">
        {result.partBreakdown?.map((partData, idx) => {
           const partRecordings = recordings.filter(r => 
              partData.part.toLowerCase().includes(r.part.toLowerCase()) ||
              r.part.toLowerCase().includes(partData.part.toLowerCase())
           );
           if (partRecordings.length === 0) return null;

           return (
             <div key={idx} className="bg-gray-50 rounded-xl py-3 px-1 md:p-6 border border-gray-200">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
                  <h3 className="text-xl font-bold text-gray-900 bg-white px-4 py-2 rounded-lg shadow-sm">
                    {partData.part} <span className="text-red-600 ml-2">Band {partData.band}</span>
                  </h3>
               </div>

               <div className="space-y-8">
                 {partRecordings.map((rec, recIdx) => {
                   const reviewData = partData.reviews?.[recIdx];
                   return (
                    <div key={recIdx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                       <div className="mb-4">
                         <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Question:</p>
                         <p className="text-gray-800 font-medium">{rec.questionContext}</p>
                       </div>

                       {!isPrinting && (
                         <div className="mb-4 bg-gray-50 p-3 rounded-lg">
                           <audio controls src={URL.createObjectURL(rec.blob)} className="w-full h-8" />
                         </div>
                       )}

                       <div className="mb-4">
                          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Transcript:</p>
                          <div className="text-gray-700 italic leading-relaxed border-l-2 border-gray-300 pl-3">
                            "{reviewData?.transcript || "Transcript not available."}"
                          </div>
                       </div>

                       {reviewData?.mistakes && reviewData.mistakes.length > 0 && (
                         <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs text-orange-500 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1">
                              <ExclamationTriangleIcon className="h-4 w-4" />
                              Improvements
                            </p>
                            <div className="grid gap-3">
                              {reviewData.mistakes.map((mistake, mIdx) => (
                                <div key={mIdx} className="text-sm bg-orange-50 p-3 rounded-md border border-orange-100">
                                   <div className="flex gap-2 mb-1">
                                      <span className="text-xs font-bold text-orange-700 bg-orange-200 px-1.5 py-0.5 rounded">{mistake.type}</span>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-1">
                                     <div className="text-red-600 line-through decoration-red-400">{mistake.original}</div>
                                     <div className="text-green-600 font-medium">{mistake.correction}</div>
                                   </div>
                                   <div className="text-gray-500 text-xs mt-1">{mistake.explanation}</div>
                                </div>
                              ))}
                            </div>
                         </div>
                       )}
                    </div>
                   );
                 })}
               </div>
             </div>
           );
        })}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const TestResult: React.FC<TestResultProps> = ({
  result,
  recordings = [],
  onRestart,
  isFullTest = false,
}) => {

  const [isDownloadingAudio, setIsDownloadingAudio] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  
  const printRef = useRef<HTMLDivElement>(null);

  if (!result) return <div>No results available.</div>;

  // Audio utility functions
  const mergeAudioBuffers = (buffers: AudioBuffer[], ctx: AudioContext): AudioBuffer => {
    const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
    const numberOfChannels = buffers[0].numberOfChannels;
    const result = ctx.createBuffer(numberOfChannels, totalLength, buffers[0].sampleRate);

    for (let channel = 0; channel < numberOfChannels; channel++) {
      let offset = 0;
      const resultData = result.getChannelData(channel);
      for (const buffer of buffers) {
        resultData.set(buffer.getChannelData(channel), offset);
        offset += buffer.length;
      }
    }
    return result;
  };

  const audioBufferToWav = (buffer: AudioBuffer): Blob => {
    const numOfChan = buffer.numberOfChannels;
    const length = buffer.length * numOfChan * 2 + 44;
    const bufferData = new ArrayBuffer(length);
    const view = new DataView(bufferData);
    let channels = [];
    let i, sample;
    let offset = 0;
    let pos = 0;

    const setUint16 = (data: number) => {
      view.setUint16(pos, data, true);
      pos += 2;
    };
    const setUint32 = (data: number) => {
      view.setUint32(pos, data, true);
      pos += 4;
    };

    setUint32(0x46464952); // "RIFF"
    setUint32(length - 8); 
    setUint32(0x45564157); // "WAVE"

    setUint32(0x20746d66); // "fmt "
    setUint32(16); 
    setUint16(1); 
    setUint16(numOfChan);
    setUint32(buffer.sampleRate);
    setUint32(buffer.sampleRate * 2 * numOfChan);
    setUint16(numOfChan * 2); 
    setUint16(16); 

    setUint32(0x61746164); // "data"
    setUint32(length - pos - 4); 

    for (i = 0; i < buffer.numberOfChannels; i++)
      channels.push(buffer.getChannelData(i));

    while (pos < buffer.length) {
      for (i = 0; i < numOfChan; i++) {
        sample = Math.max(-1, Math.min(1, channels[i][pos])); 
        sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0; 
        view.setInt16(44 + offset, sample, true); 
        offset += 2;
      }
      pos++;
    }

    return new Blob([bufferData], { type: 'audio/wav' });
  };

  const handleDownloadFullAudio = async () => {
    if (recordings.length === 0) return;
    setIsDownloadingAudio(true);

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const buffers: AudioBuffer[] = [];

      for (const rec of recordings) {
        const arrayBuffer = await rec.blob.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        buffers.push(audioBuffer);
      }

      if (buffers.length > 0) {
        const mergedBuffer = mergeAudioBuffers(buffers, audioContext);
        const wavBlob = audioBufferToWav(mergedBuffer);
        
        const url = URL.createObjectURL(wavBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `IELTS_Full_Session_${new Date().toISOString().slice(0,10)}.wav`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (e) {
      console.error("Error merging audio", e);
      alert("Failed to merge audio files.");
    } finally {
      setIsDownloadingAudio(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!printRef.current) return;
    setIsGeneratingPDF(true);

    try {
      // Use html2canvas to capture the hidden print view
      const canvas = await html2canvas(printRef.current, {
        scale: 2, // Higher resolution
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Create PDF with dimensions matching the captured canvas (scrolling single page)
      // Dividing by 2 because of scale:2, but keeping it simple with pixel units equal to canvas size often works best for screen reports
      // OR map to A4 width and scale height.
      
      // Approach: A4 Width fixed, Height variable (Long PDF)
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // IF content is longer than one page, create a custom sized PDF instead of A4 to avoid ugly page breaks in the middle of elements
      // Re-initialize with custom size
      const customPdf = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: [canvas.width, canvas.height] 
      });
      
      customPdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      customPdf.save(`IELTS_Result_Full_Report_${new Date().toISOString().slice(0,10)}.pdf`);

    } catch (e) {
      console.error("PDF Generation Error:", e);
      alert("Failed to generate PDF.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <>
      {/* --- VISIBLE UI --- */}
      <DashboardView result={result} isFullTest={isFullTest}>
          <button
             onClick={handleDownloadFullAudio}
             disabled={isDownloadingAudio}
             className="flex items-center px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 text-xs md:text-sm font-semibold transition shadow"
          >
             <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
             {isDownloadingAudio ? 'Processing...' : 'Download Full Audio'}
          </button>
          
          <button
             onClick={handleDownloadPDF}
             disabled={isGeneratingPDF}
             className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs md:text-sm font-semibold transition shadow"
          >
             <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
             {isGeneratingPDF ? 'Generating...' : 'Download PDF Report'}
          </button>
          

           
          <button
            onClick={onRestart}
            className="px-5 md:px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition shadow-lg text-sm"
          >
            Take Another Test
          </button>
        </DashboardView>

      <div className="border-t-4 border-gray-100 my-8"></div>
      
      <DetailedReview result={result} recordings={recordings} />

      {/* --- HIDDEN PRINT VIEW --- */}
      <div className="fixed left-[-3000px] top-0 w-[1000px]">
         <div ref={printRef} className="bg-white p-8 space-y-8">
            <DashboardView result={result} isFullTest={isFullTest} isPrinting={true} />
            <div className="border-t-4 border-gray-100 my-8"></div>
            <DetailedReview result={result} recordings={recordings} isPrinting={true} />
         </div>
      </div>
    </>
  );
};

export default TestResult;