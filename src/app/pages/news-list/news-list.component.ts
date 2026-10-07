import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [RouterLink, FormsModule, NewsCardComponent],
  templateUrl: './news-list.component.html',
})
export class NewsListComponent {
  readonly service = inject(NewsService);

  // Query params (?categoria=...&buscar=...) enlazados por withComponentInputBinding
  readonly categoria = input<string>();
  readonly buscar = input<string>();

  readonly categoriaActiva = signal('Todas');
  readonly busqueda = signal('');
  readonly orden = signal('recientes');

  constructor() {
    effect(() => this.categoriaActiva.set(this.categoria() || 'Todas'), { allowSignalWrites: true });
    effect(() => this.busqueda.set(this.buscar() || ''), { allowSignalWrites: true });
  }

  readonly sidebar = computed(() => {
    const noticias = this.service.news();
    const todas = [{ name: 'Todas', icon: '📰' }, ...this.service.categories()];
    return todas.map((c) => ({
      ...c,
      count: c.name === 'Todas' ? noticias.length : noticias.filter((n) => n.category === c.name).length,
    }));
  });

  readonly resultado = computed(() => {
    const q = this.busqueda().toLowerCase();
    const cat = this.categoriaActiva();
    const orden = this.orden();
    return this.service
      .news()
      .filter(
        (n) =>
          (cat === 'Todas' || n.category === cat) &&
          (!q || n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q))
      )
      .sort((a, b) => {
        if (orden === 'recientes') return b.id - a.id;
        if (orden === 'antiguos') return a.id - b.id;
        return a.title.localeCompare(b.title);
      });
  });

  limpiarFiltros(): void {
    this.busqueda.set('');
    this.categoriaActiva.set('Todas');
  }
}
