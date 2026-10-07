import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { News } from '../../models';
import { FavoritesService } from '../../services/favorites.service';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-card.component.html',
})
export class NewsCardComponent {
  readonly news = input.required<News>();
  readonly newsService = inject(NewsService);
  readonly favs = inject(FavoritesService);
}
