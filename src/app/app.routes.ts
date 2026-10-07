import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'TecnoNews — Inicio' },
  { path: 'noticias', component: NewsListComponent, title: 'TecnoNews — Noticias' },
  { path: 'noticias/:id', component: DetailComponent },
  { path: 'favoritos', component: FavoritesComponent, title: 'TecnoNews — Favoritos' },
  { path: 'contacto', component: ContactComponent, title: 'TecnoNews — Contacto' },
  { path: 'login', component: LoginComponent, title: 'TecnoNews — Login' },
  { path: 'admin', component: AdminComponent, title: 'TecnoNews — Admin', canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
