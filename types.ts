export enum TestMode {
  FULL = 'FULL',
  PART1 = 'PART1',
  PART2 = 'PART2',
  PART3 = 'PART3',
}

export enum TestPhase {
  WELCOME = 'WELCOME',
  INSTRUCTIONS = 'INSTRUCTIONS',
  PART_1 = 'PART_1',
  PART_2_PREP = 'PART_2_PREP',
  PART_2_ANSWER = 'PART_2_ANSWER',
  PART_3 = 'PART_3',
  EVALUATING = 'EVALUATING',
  RESULTS = 'RESULTS',
}

export interface QuestionPart1 {
  id?: string;
  topic: string;
  questions: string[];
}

export interface QuestionPart2 {
  topic: string;
  bullets: string[];
}

export interface QuestionPart3 {
  topic: string;
  questions: string[];
}

export interface TestContent {
  part1: QuestionPart1;
  part2: QuestionPart2;
  part3: QuestionPart3[];
}

export interface PartBreakdown {
  part: string;
  scores: {
    fluencyCoherence: number;
    lexicalResource: number;
    grammaticalRange: number;
    pronunciation: number;
  };
  band: number;
  feedback: string;
}

export interface EvaluationResult {
  overallBand: number;
  fluencyCoherence: {
    score: number;
    feedback: string;
  };
  lexicalResource: {
    score: number;
    feedback: string;
  };
  grammaticalRange: {
    score: number;
    feedback: string;
  };
  pronunciation: {
    score: number;
    feedback: string;
  };
  generalFeedback: string;
  partBreakdown?: PartBreakdown[];
}

export interface AudioRecording {
  part: string; // 'Part 1', 'Part 2', 'Part 3'
  blob: Blob;
  questionContext: string;
}
