import { Injectable } from '@angular/core';

const USER = 'q_user';
const TOKEN = 'q_token';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() {}

  static saveUser(user: any) {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static saveToken(token: string) {
    window.localStorage.removeItem(TOKEN);
    // JWT rakapotey dummy token save chestam - anduke dashboard vastundi
    window.localStorage.setItem(TOKEN, token || 'dummy_token');
  }

  static getUser(): any {
    const user = window.localStorage.getItem(USER);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  static getToken() {
    return window.localStorage.getItem(TOKEN);
  }

  static getUserRole(): string {
    const user = this.getUser();
    if (user == null) return '';
    return user.role;
  }

  static isAdminLoggedIn(): boolean {
    if (this.getToken() == null) return false;
    const role = this.getUserRole();
    return role == 'ADMIN';
  }

  static isUserLoggedIn(): boolean {
    if (this.getToken() == null) return false;
    const role = this.getUserRole();
    return role == 'USER';
  }

  static signOut() {
    window.localStorage.removeItem(USER);
    window.localStorage.removeItem(TOKEN);
  }
}