import React from 'react';
import { EvaluationResult } from '../types';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip, PolarAngleAxis } from 'recharts';

interface TestResultProps {
  result: EvaluationResult;
  onRestart: () => void;
  isFullTest?: boolean;
}

const TestResult: React.FC<TestResultProps> = ({ result, onRestart, isFullTest = false }) => {
  // Defensive check: if result is null/undefined
  if (!result) return <div>No results available.</div>;

  // Safe access helpers with default values
  const getScore = (category: any) => category?.score || 0;
  const getFeedback = (category: any) => category?.feedback || "No feedback available.";

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
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white shadow-xl rounded-2xl my-4 md:my-8">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Test Complete</h2>
        <div className="inline-block p-4 md:p-6 rounded-full bg-red-50 border-4 border-red-100">
          <p className="text-xs md:text-sm uppercase tracking-wide text-gray-500 font-semibold mb-1">Overall Band Score</p>
          <p className="text-5xl md:text-6xl font-extrabold text-red-600">{result.overallBand || 0}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
        {/* Chart */}
        <div className="h-64 w-full min-w-0">
           <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={20} data={chartData} startAngle={180} endAngle={0}>
              <PolarAngleAxis type="number" domain={[0, 9]} tick={false} />
              <RadialBar
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                dataKey="score"
              />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{top: 0, left: 0}} />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* General Feedback */}
        <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-100 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                General Feedback
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">"{result.generalFeedback || "No general feedback provided."}"</p>
        </div>
      </div>

      {/* Breakdown Section (Only if partBreakdown exists AND isFullTest) */}
      {hasPartBreakdown && isFullTest && (
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Full Test Breakdown</h3>
          
          <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-lg">
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
        </div>
      )}

      <div className="space-y-4">
        <ScoreCard 
          title="Fluency & Coherence" 
          score={getScore(result.fluencyCoherence)} 
          feedback={getFeedback(result.fluencyCoherence)} 
          colorClass={getScoreColor(getScore(result.fluencyCoherence))}
        />
        <ScoreCard 
          title="Lexical Resource" 
          score={getScore(result.lexicalResource)} 
          feedback={getFeedback(result.lexicalResource)} 
          colorClass={getScoreColor(getScore(result.lexicalResource))}
        />
        <ScoreCard 
          title="Grammatical Range & Accuracy" 
          score={getScore(result.grammaticalRange)} 
          feedback={getFeedback(result.grammaticalRange)} 
          colorClass={getScoreColor(getScore(result.grammaticalRange))}
        />
        <ScoreCard 
          title="Pronunciation" 
          score={getScore(result.pronunciation)} 
          feedback={getFeedback(result.pronunciation)} 
          colorClass={getScoreColor(getScore(result.pronunciation))}
        />
      </div>

      <div className="mt-8 md:mt-10 text-center">
        <button 
          onClick={onRestart}
          className="px-6 md:px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition shadow-lg text-sm md:text-base"
        >
          Take Another Test
        </button>
      </div>
    </div>
  );
};

const ScoreCard: React.FC<{title: string, score: number, feedback: string, colorClass: string}> = ({ title, score, feedback, colorClass }) => (
  <div className={`p-4 rounded-xl border-l-4 bg-white shadow-sm ${colorClass.split(' ')[2]}`}>
    <div className="flex justify-between items-center mb-2">
      <h4 className="font-bold text-gray-800 text-base md:text-lg">{title}</h4>
      <span className={`px-3 py-1 rounded-full text-xs md:text-sm font-bold ${colorClass}`}>Band {score}</span>
    </div>
    <p className="text-gray-600 text-sm">{feedback}</p>
  </div>
);

export default TestResult;