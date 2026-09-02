import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../../../../services/test.service';
import { Test } from '../../../../models/test.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-tests', standalone: true, imports: [CommonModule, RouterLink],
  template: `<div style="padding:20px"><h2>All Tests (Admin)</h2>
  <button routerLink="/admin/create-test" style="background:green; color:white; padding:8px 15px; border:none">+ Create Test</button>
  <div *ngFor="let t of tests" style="border:1px solid #ccc; padding:10px; margin:10px">{{t.title}} - {{t.questions.length}} Questions</div></div>`
})
export class ViewTestsComponent implements OnInit {
  tests: Test[]=[]; constructor(private s: TestService){} ngOnInit(){ this.tests=this.s.getAllTests(); }
}
