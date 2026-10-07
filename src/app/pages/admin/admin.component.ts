import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { News } from '../../models';
import { NewsService } from '../../services/news.service';
import { AuthService } from '../../services/auth.service';

type View = 'list' | 'create' | 'edit';

interface FormData {
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  readonly service = inject(NewsService);
  readonly authService = inject(AuthService);
  private router = inject(Router);

  readonly view = signal<View>('list');
  readonly saved = signal(false);
  readonly deleteId = signal<number | null>(null);
  readonly imageFailed = signal(false);

  private editId: number | null = null;
  form: FormData = this.emptyForm();

  private emptyForm(): FormData {
    return {
      title: '',
      category: this.service.categories()[0]?.name ?? '',
      excerpt: '',
      content: '',
      author: '',
      image: '',
    };
  }

  setView(v: View): void {
    this.view.set(v);
    this.saved.set(false);
  }

  startCreate(): void {
    this.form = this.emptyForm();
    this.editId = null;
    this.imageFailed.set(false);
    this.setView('create');
  }

  startEdit(id: number): void {
    const n = this.service.getById(id);
    if (!n) return;
    const { title, category, excerpt, content, author, image } = n;
    this.form = { title, category, excerpt, content, author, image };
    this.editId = id;
    this.imageFailed.set(false);
    this.setView('edit');
  }

  private readTime(text: string): string {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 200))} min de lectura`;
  }

  save(): void {
    const f = this.form;
    f.title = f.title.trim();
    f.excerpt = f.excerpt.trim();
    f.content = f.content.trim();
    f.author = f.author.trim();
    f.image = f.image.trim();

    if (!f.title || !f.excerpt || !f.content || !f.image) {
      alert('Por favor completa los campos obligatorios (título, descripción breve, contenido e imagen).');
      return;
    }

    const current = this.service.news();
    if (this.view() === 'create') {
      const nueva: News = {
        ...f,
        id: Date.now(),
        date: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' }),
        readTime: this.readTime(f.content),
      };
      this.service.saveNews([nueva, ...current]);
    } else if (this.editId !== null) {
      this.service.saveNews(current.map((a) => (a.id === this.editId ? { ...a, ...f } : a)));
    }

    this.saved.set(true);
    setTimeout(() => this.setView('list'), 1000);
  }

  confirmDelete(): void {
    const id = this.deleteId();
    this.service.saveNews(this.service.news().filter((a) => a.id !== id));
    this.deleteId.set(null);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
