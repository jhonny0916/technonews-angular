import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule, NewsCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private router = inject(Router);
  readonly service = inject(NewsService);

  query = '';

  readonly featured = computed(() => this.service.news().slice(0, 3));
  readonly rest = computed(() => this.service.news().slice(3));
  readonly showcase = computed(() =>
    this.service.categories().map((c) => ({
      ...c,
      count: this.service.news().filter((n) => n.category === c.name).length,
    }))
  );

  search(): void {
    const q = this.query.trim();
    this.router.navigate(['/noticias'], { queryParams: q ? { buscar: q } : {} });
  }
}
