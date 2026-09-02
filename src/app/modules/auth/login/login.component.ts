import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../services/auth.service';
import { UserStorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NzFormModule, NzInputModule, NzButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private message: NzMessageService, private router: Router) {}
  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
submitForm() {
  // Backend lekunda direct login - Demo kosam
  this.message.success('Login Success.', { nzDuration: 2000 });
  
  const user = { id: 1, role: 'USER' };
  localStorage.setItem('q_user', JSON.stringify(user));
  localStorage.setItem('q_token', 'dummy-token-12345');
  
  // Role batti redirect
  if(this.validateForm.value.email?.includes('admin')){
     this.router.navigate(['/admin/dashboard']);
  } else {
     this.router.navigate(['/user/dashboard']);
  }
}
}