import { Injectable } from '@angular/core';
import { Test } from '../models/test.model';

@Injectable({ providedIn: 'root' })
export class TestService {
  private tests: Test[] = [
    { id: 1, title: 'Java Basics', description: 'Core Java Quiz', time: 10, questions: [
      { id: 1, questionText: 'Java is?', options: ['Language', 'Coffee', 'OS', 'None'], correctAnswer: 'Language' },
      { id: 2, questionText: 'JVM stands for?', options: ['Java Virtual Machine', 'Java Very Much', 'None', 'Both'], correctAnswer: 'Java Virtual Machine' }
    ]},
    { id: 2, title: 'Angular Basics', description: 'Angular 17 Quiz', time: 5, questions: [
      { id: 1, questionText: 'Angular is a?', options: ['Framework', 'Library', 'Language', 'DB'], correctAnswer: 'Framework' }
    ]}
  ];

  getAllTests() { return this.tests; }
  getTestById(id: number) { return this.tests.find(t => t.id === id); }
  createTest(test: Test) { test.id = this.tests.length + 1; this.tests.push(test); }
  addQuestion(testId: number, q: any) { this.getTestById(testId)?.questions.push(q); }
}