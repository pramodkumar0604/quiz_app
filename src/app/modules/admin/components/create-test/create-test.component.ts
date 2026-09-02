import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestService } from '../../../../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-test', standalone: true, imports: [FormsModule],
  template: `
  <div style="padding:20px; max-width:500px; margin:auto">
    <h2>Create New Test</h2>
    <input [(ngModel)]="title" placeholder="Test Title" style="width:100%; padding:8px; margin:5px 0"><br>
    <input [(ngModel)]="desc" placeholder="Description" style="width:100%; padding:8px; margin:5px 0"><br>
    <input [(ngModel)]="time" type="number" placeholder="Time in mins" style="width:100%; padding:8px; margin:5px 0"><br>
    <button (click)="create()" style="background:#1890ff; color:white; padding:10px 20px; border:none; margin-top:10px">Create</button>
  </div>`
})
export class CreateTestComponent {
  title=''; desc=''; time=10;
  constructor(private s: TestService, private router: Router){}
  create(){ this.s.createTest({id:0, title:this.title, description:this.desc, time:this.time, questions:[]}); alert('Test Created!'); this.router.navigate(['/admin/view-tests']); }
}
