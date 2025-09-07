import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-contactanos',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactanosComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    if (this.form.name && this.form.email && this.form.message) {
      // Aquí podrías enviar el formulario a un backend
      this.submitted = true;
      this.form = { name: '', email: '', message: '' };
    }
  }
}