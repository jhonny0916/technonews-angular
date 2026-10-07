import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Category, News, NewsData } from '../models';

const DATA_URL = 'data/news.json';
const ADMIN_KEY = 'tecnonews_admin_noticias';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private http = inject(HttpClient);

  readonly categories = signal<Category[]>([]);
  readonly news = signal<News[]>([]);
  readonly loaded = signal(false);

  constructor() {
    this.http.get<NewsData>(DATA_URL).subscribe({
      next: (data) => {
        this.categories.set(data.categories);
        this.news.set(this.readSaved() ?? data.news);
        this.loaded.set(true);
      },
      error: () => console.error('No se pudo cargar data/news.json'),
    });
  }

  // Si el admin guardó cambios en localStorage, tienen prioridad sobre el JSON.
  private readSaved(): News[] | null {
    const raw = localStorage.getItem(ADMIN_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as News[];
    } catch {
      console.warn('No se pudo leer el admin local, se usa el JSON original.');
      return null;
    }
  }

  saveNews(news: News[]): void {
    this.news.set(news);
    localStorage.setItem(ADMIN_KEY, JSON.stringify(news));
  }

  getById(id: number): News | undefined {
    return this.news().find((n) => n.id === id);
  }

  categoryColor(name: string): string {
    return this.categories().find((c) => c.name === name)?.color ?? '#00b8a2';
  }

  categoryIcon(name: string): string {
    return this.categories().find((c) => c.name === name)?.icon ?? '📰';
  }
}
