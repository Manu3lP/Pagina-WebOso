import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {
  slides = [
    { image: '/assets/slide1.jpg', title: 'Bienvenido a MiSitio' },
    { image: '/assets/slide2.jpg', title: 'Calidad y Confianza' },
    { image: '/assets/slide3.jpg', title: 'Contáctanos Hoy' }
  ];
  currentSlide = 0;

  cards = [
    { image: '/assets/card1.jpg', title: 'Servicio 1', description: 'Descripción breve del servicio 1.' },
    { image: '/assets/card2.jpg', title: 'Servicio 2', description: 'Descripción breve del servicio 2.' },
    { image: '/assets/card3.jpg', title: 'Servicio 3', description: 'Descripción breve del servicio 3.' }
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}