import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface AdminCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  readonly isAuthenticated = signal(this.getStoredAuth());

  private getStoredAuth(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('admin_authenticated') === 'true';
    }
    return false;
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      const data = await firstValueFrom(
        this.http.get<{ admin: AdminCredentials }>('/data/news.json')
      );

      if (
        data.admin &&
        data.admin.username === username &&
        data.admin.password === password
      ) {
        localStorage.setItem('admin_authenticated', 'true');
        this.isAuthenticated.set(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('admin_authenticated');
    this.isAuthenticated.set(false);
  }
}
