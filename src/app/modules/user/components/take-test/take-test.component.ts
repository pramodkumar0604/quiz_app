import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../../../../services/test.service';
import { Test } from '../../../../models/test.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-take-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div style="padding:20px; max-width:600px; margin:auto" *ngIf="test">
    <h2>{{test.title}}</h2>
    <div *ngFor="let q of test.questions; let i=index" style="margin:20px 0; border:1px solid #eee; padding:15px">
      <p><b>Q{{i+1}}: {{q.questionText}}</b></p>
      <div *ngFor="let opt of q.options">
        <label><input type="radio" [name]="'q'+i" [value]="opt" [(ngModel)]="answers[i]"> {{opt}}</label>
      </div>
    </div>
    <button (click)="submit()" style="background:green; color:white; padding:10px 20px; border:none; border-radius:5px">Submit</button>
    <h3 *ngIf="score!== null">Your Score: {{score}} / {{test.questions.length}}</h3>
  </div>`
})
export class TakeTestComponent implements OnInit {
  test!: Test | undefined; answers: string[] = []; score: number | null = null;
  constructor(private route: ActivatedRoute, private service: TestService, private router: Router){}
  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.test = this.service.getTestById(id);
  }
  submit(){
    let s=0;
    this.test?.questions.forEach((q,i)=>{ if(q.correctAnswer === this.answers[i]) s++; });
    this.score=s;
    alert(`Score: ${s}/${this.test?.questions.length}`);
  }
}
