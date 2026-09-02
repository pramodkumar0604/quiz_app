export interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
}
export interface Test {
  id: number;
  title: string;
  description: string;
  time: number;
  questions: Question[];
}
export interface TestResult {
  testId: number;
  score: number;
  total: number;
}