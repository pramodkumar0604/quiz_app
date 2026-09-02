import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TestService } from '../../../../services/test.service';
import { Test } from '../../../../models/test.model';

@Component({
  selector: 'app-view-tests',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div style="padding:20px"><h2>Available Tests</h2>
  <div *ngFor="let test of tests" style="border:1px solid #ccc; padding:15px; margin:10px; border-radius:8px">
    <h3>{{test.title}}</h3><p>{{test.description}} - {{test.time}} mins</p>
    <button [routerLink]="['/user/take-test', test.id]" style="background:#1890ff; color:white; border:none; padding:8px 15px; border-radius:4px">Start Test</button>
  </div></div>`
})
export class ViewTestsComponent implements OnInit {
  tests: Test[] = [];
  constructor(private testService: TestService){}
  ngOnInit(){ this.tests = this.testService.getAllTests(); }
}
