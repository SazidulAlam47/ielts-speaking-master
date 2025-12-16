import { GoogleGenAI, Type } from '@google/genai';
import { RUBRIC_SYSTEM_PROMPT } from '../constants/prompt';
import { EvaluationResult, AudioRecording } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const evaluateTest = async (
  recordings: AudioRecording[]
): Promise<EvaluationResult> => {
  try {
    const parts = [];

    // Context setting
    parts.push({
      text: 'Evaluate the following IELTS Speaking test session. The audio parts are provided in sequence with their context.',
    });

    // Process all audio recordings
    for (const recording of recordings) {
      const base64Audio = await blobToBase64(recording.blob);

      parts.push({
        text: `[Context: ${recording.part} - ${recording.questionContext}]`,
      });

      parts.push({
        inlineData: {
          mimeType: recording.blob.type || 'audio/webm',
          data: base64Audio,
        },
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: parts,
      },
      config: {
        systemInstruction: RUBRIC_SYSTEM_PROMPT,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overallBand: { type: Type.NUMBER },
            fluencyCoherence: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.NUMBER },
                feedback: { type: Type.STRING },
              },
              required: ['score', 'feedback'],
            },
            lexicalResource: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.NUMBER },
                feedback: { type: Type.STRING },
              },
              required: ['score', 'feedback'],
            },
            grammaticalRange: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.NUMBER },
                feedback: { type: Type.STRING },
              },
              required: ['score', 'feedback'],
            },
            pronunciation: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.NUMBER },
                feedback: { type: Type.STRING },
              },
              required: ['score', 'feedback'],
            },
            generalFeedback: { type: Type.STRING },
            partBreakdown: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  part: { type: Type.STRING },
                  scores: {
                    type: Type.OBJECT,
                    properties: {
                      fluencyCoherence: { type: Type.NUMBER },
                      lexicalResource: { type: Type.NUMBER },
                      grammaticalRange: { type: Type.NUMBER },
                      pronunciation: { type: Type.NUMBER },
                    },
                    required: [
                      'fluencyCoherence',
                      'lexicalResource',
                      'grammaticalRange',
                      'pronunciation',
                    ],
                  },
                  band: { type: Type.NUMBER },
                  feedback: { type: Type.STRING },
                  reviews: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        question: { type: Type.STRING },
                        transcript: { type: Type.STRING },
                        mistakes: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              original: { type: Type.STRING },
                              correction: { type: Type.STRING },
                              explanation: { type: Type.STRING },
                              type: { type: Type.STRING },
                            },
                            required: [
                              'original',
                              'correction',
                              'explanation',
                              'type',
                            ],
                          },
                        },
                      },
                      required: ['question', 'transcript', 'mistakes'],
                    },
                  },
                },
                required: ['part', 'scores', 'band', 'feedback', 'reviews'],
              },
            },
          },
          required: [
            'overallBand',
            'fluencyCoherence',
            'lexicalResource',
            'grammaticalRange',
            'pronunciation',
            'generalFeedback',
            'partBreakdown',
          ],
        },
      },
    });



    if (response.text) {
      return JSON.parse(response.text) as EvaluationResult;
    } else {
      throw new Error('No response text from Gemini');
    }
  } catch (error) {
    console.error('Evaluation Error Details:', error);
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing in process.env!");
    } else {
      console.log("API_KEY is present (starts with):", process.env.API_KEY.substring(0, 5) + "...");
    }
    throw error;
  }
};
