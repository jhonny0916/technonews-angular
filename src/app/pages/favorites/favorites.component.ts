import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent {
  readonly service = inject(NewsService);
  readonly favs = inject(FavoritesService);

  readonly favNews = computed(() => this.service.news().filter((n) => this.favs.ids().has(n.id)));
}
