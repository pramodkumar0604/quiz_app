import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserStorageService } from './modules/auth/services/storage/storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NzLayoutModule, NzButtonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  constructor(private router: Router) {}
  ngOnInit() {
    this.updateStatus();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateStatus();
      }
    });
  }
  updateStatus() {
    this.isUserLoggedIn = UserStorageService.isUserLoggedIn();
    this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
  }
  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('/login');
  }
}