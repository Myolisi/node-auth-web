import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private api: ApiService, private router: Router) {}

  ping(): any {
    return this.api.get('ping');
  }

  login(username: string, password: string): any {
    return this.api
      .post('auth/login', { email: username, password })
      .subscribe((res) => {
        this.router.navigate(['/home']);
      });
  }
}
