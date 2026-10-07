import { Injectable, signal } from '@angular/core';

const FAV_KEY = 'tecnonews_favoritos';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  readonly ids = signal<Set<number>>(this.read());

  private read(): Set<number> {
    const raw = localStorage.getItem(FAV_KEY);
    return raw ? new Set<number>(JSON.parse(raw)) : new Set<number>();
  }

  has(id: number): boolean {
    return this.ids().has(id);
  }

  toggle(id: number): void {
    const next = new Set(this.ids());
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this.ids.set(next);
    localStorage.setItem(FAV_KEY, JSON.stringify([...next]));
  }
}
