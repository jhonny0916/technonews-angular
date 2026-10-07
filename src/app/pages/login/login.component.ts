import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  username: string = '';
  password: string = '';
  loading = signal(false);
  error = signal('');

  async login(): Promise<void> {
    this.error.set('');

    if (!this.username.trim() || !this.password.trim()) {
      this.error.set('Por favor completa todos los campos.');
      return;
    }

    this.loading.set(true);
    const success = await this.authService.login(this.username, this.password);

    if (success) {
      this.router.navigate(['/admin']);
    } else {
      this.error.set('Usuario o contraseña incorrectos.');
      this.password = '';
    }

    this.loading.set(false);
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.login();
    }
  }
}
