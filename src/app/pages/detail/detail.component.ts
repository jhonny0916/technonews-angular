import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  readonly service = inject(NewsService);
  readonly favs = inject(FavoritesService);

  // Parámetro de ruta :id
  readonly id = input.required<string>();

  readonly noticia = computed(() => this.service.news().find((n) => n.id === Number(this.id())));
  readonly color = computed(() => this.service.categoryColor(this.noticia()?.category ?? ''));
  readonly parrafos = computed(() => (this.noticia()?.content ?? '').split('\n\n'));
  readonly relacionadas = computed(() => {
    const n = this.noticia();
    if (!n) return [];
    return this.service
      .news()
      .filter((r) => r.id !== n.id && r.category === n.category)
      .slice(0, 3);
  });

  readonly shares = [
    { label: '💬 WhatsApp', color: '#25d366' },
    { label: '𝕏 Twitter', color: '#1da1f2' },
    { label: 'f Facebook', color: '#1877f2' },
    { label: 'in LinkedIn', color: '#0a66c2' },
  ];
}
