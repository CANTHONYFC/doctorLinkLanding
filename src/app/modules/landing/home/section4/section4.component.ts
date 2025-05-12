import { Component } from '@angular/core';

@Component({
    selector: 'app-section4',
    templateUrl: './section4.component.html',
    styleUrls: ['./section4.component.scss'],
})
export class Section4Component {
  ngOnInit() {
    this.observeElements();
  }

  observeElements() {
    // Seleccionamos todos los elementos con la clase 'animate__fadeInUp'
    const elements = document.querySelectorAll('.animate__fadeInUp');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Si el elemento entra en el viewport
        if (entry.isIntersecting) {
          // Añadimos la clase de animación combinada
          entry.target.classList.add('animate__fadeInUpZoom');
          // Deja de observar el elemento una vez haya sido visible
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5 // El elemento debe estar al 50% visible
    });

    // Comenzamos a observar los elementos
    elements.forEach(element => observer.observe(element));
  }
}
