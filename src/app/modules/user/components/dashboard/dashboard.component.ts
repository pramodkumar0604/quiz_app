import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard', standalone: true, imports: [RouterLink],
  template: `<div style="padding:40px; text-align:center"><h1>User Dashboard - Welcome!</h1><p>Login Success!</p>
  <button routerLink="/user/view-tests" style="margin:10px; padding:10px 20px; background:#1890ff; color:white; border:none; border-radius:5px">View Tests</button>
  <button routerLink="/admin/dashboard" style="padding:10px 20px; background:#333; color:white; border:none; border-radius:5px">Go to Admin</button>
  </div>`
})
export class DashboardComponent {}
