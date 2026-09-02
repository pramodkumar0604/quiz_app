import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard', standalone: true, imports: [RouterLink],
  template: `<div style="padding:40px; text-align:center"><h1>Admin Dashboard 👑</h1>
  <button routerLink="/admin/view-tests" style="padding:10px 20px; background:#ff4d4f; color:white; border:none; border-radius:5px">View All Tests</button></div>`
})
export class DashboardComponent {}
