import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  
  { path: 'auth/login', loadComponent: () => import('./modules/auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'auth/signup', loadComponent: () => import('./modules/auth/signup/signup.component').then(m => m.SignupComponent) },

  { path: 'user/dashboard', loadComponent: () => import('./modules/user/components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'user/view-tests', loadComponent: () => import('./modules/user/components/view-tests/view-tests.component').then(m => m.ViewTestsComponent) },
  { path: 'user/take-test/:id', loadComponent: () => import('./modules/user/components/take-test/take-test.component').then(m => m.TakeTestComponent) },
  
  { path: 'admin/dashboard', loadComponent: () => import('./modules/admin/components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'admin/view-tests', loadComponent: () => import('./modules/admin/components/view-tests/view-tests.component').then(m => m.ViewTestsComponent) },
  { path: 'admin/create-test', loadComponent: () => import('./modules/admin/components/create-test/create-test.component').then(m => m.CreateTestComponent) },
];