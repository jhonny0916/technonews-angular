import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Field = 'name' | 'email' | 'message';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  form = { name: '', email: '', phone: '', message: '' };
  readonly errors = signal<Partial<Record<Field, string>>>({});
  readonly sending = signal(false);
  readonly sent = signal(false);

  clearError(field: Field): void {
    this.errors.update((e) => ({ ...e, [field]: undefined }));
  }

  private validate(): boolean {
    const errors: Partial<Record<Field, string>> = {};
    if (!this.form.name.trim()) errors.name = 'El nombre es requerido';

    const email = this.form.email.trim();
    if (!email) errors.email = 'El correo es requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Ingresa un correo válido';

    if (!this.form.message.trim()) errors.message = 'El mensaje es requerido';

    this.errors.set(errors);
    return Object.keys(errors).length === 0;
  }

  submit(): void {
    if (!this.validate()) return;
    this.sending.set(true);
    // Simulación de envío (sin backend real)
    setTimeout(() => {
      this.sending.set(false);
      this.sent.set(true);
    }, 1200);
  }

  reset(): void {
    this.form = { name: '', email: '', phone: '', message: '' };
    this.errors.set({});
    this.sent.set(false);
  }
}
