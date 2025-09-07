import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  items = [
    { title: 'Visión', content: 'Ser la empresa líder en soluciones tecnológicas.' },
    { title: 'Misión', content: 'Ofrecer productos y servicios de alta calidad que satisfagan a nuestros clientes.' },
    { title: 'Valores', content: 'Compromiso, innovación, responsabilidad y trabajo en equipo.' }
  ];

  activeIndex: number | null = null;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}