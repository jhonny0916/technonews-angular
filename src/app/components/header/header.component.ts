import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly favs = inject(FavoritesService);
  readonly authService = inject(AuthService);
  private router = inject(Router);
  readonly menuOpen = signal(false);

  readonly links = [
    { label: 'Inicio', path: '/', exact: true },
    { label: 'Noticias', path: '/noticias', exact: false },
    { label: 'Favoritos', path: '/favoritos', exact: false },
    { label: 'Contacto', path: '/contacto', exact: false },
  ];

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    this.menuOpen.set(false);
  }
}

