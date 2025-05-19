import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss'],
})
export class Section3Component implements AfterViewInit {
  valores = [
    {
      titulo: 'Los doctores primero',
      descripcion:
        'Creemos que los profesionales de la salud deben salvarse del burnout con herramientas diseñadas para ellos y sus flujos de trabajo. Por eso Doctoc está diseñado por médicos, para médicos.',
    },
    {
      titulo: 'Diseño humano',
      descripcion:
        'Nuestra plataforma está diseñada para el cuidado de la salud moderna, pensando tanto en los profesionales de la salud como en sus pacientes.',
    },
    {
      titulo: 'Valor 3',
      descripcion: 'Descripción del valor 3.',
    },
    {
      titulo: 'Valor 4',
      descripcion: 'Descripción del valor 4.',
    },
    {
      titulo: 'Valor 5',
      descripcion: 'Descripción del valor 5.',
    },
    {
      titulo: 'Valor 6',
      descripcion: 'Descripción del valor 6.',
    },
  ];

  @ViewChild('leftCol') leftCol!: ElementRef;
  @ViewChild('rightCol') rightCol!: ElementRef;
  @ViewChild('container') container!: ElementRef;
  @ViewChild('flexContainer') flexContainer!: ElementRef;

  leftColStyle: any = {
    position: 'static',
    top: undefined,
    left: undefined,
    width: '24rem',
    visibility: 'hidden',  // oculto inicialmente
    pointerEvents: 'none', // no interactuable cuando oculto
  };

  private leftOriginalLeft = 0;

  ngAfterViewInit() {
    // Calculamos left relativo al contenedor flexContainer
    const leftColRect = this.leftCol.nativeElement.getBoundingClientRect();
    const flexContainerRect = this.flexContainer.nativeElement.getBoundingClientRect();

    this.leftOriginalLeft = leftColRect.left - flexContainerRect.left;

    this.updateLeftColPosition();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateLeftColPosition();
  }

  updateLeftColPosition() {
    const scrollY = window.scrollY || window.pageYOffset;

    const containerRect = this.container.nativeElement.getBoundingClientRect();
    const containerTop = scrollY + containerRect.top;

    const rightHeight = this.rightCol.nativeElement.offsetHeight;
    const leftHeight = this.leftCol.nativeElement.offsetHeight;
    const containerBottom = containerTop + rightHeight;

    const limit = containerBottom - leftHeight - 80; // offset top 80px

    if (scrollY >= limit) {
      // Posición absoluta pegada al final del contenedor (relativo a flexContainer)
      this.leftColStyle = {
        position: 'absolute',
        top: `${rightHeight - leftHeight}px`,
        left: `${this.leftOriginalLeft}px`,
        width: '24rem',
        visibility: 'visible',
        pointerEvents: 'auto',
      };
    } else if (scrollY >= containerTop - 80) {
      // Posición fija con left absoluto (relativo al viewport)
      const flexContainerRect = this.flexContainer.nativeElement.getBoundingClientRect();
      const flexContainerLeftAbs = flexContainerRect.left;

      this.leftColStyle = {
        position: 'fixed',
        top: '80px',
        left: `${this.leftOriginalLeft + flexContainerLeftAbs}px`,
        width: '24rem',
        visibility: 'visible',
        pointerEvents: 'auto',
      };
    } else {
      // Oculto hasta llegar a la posición del scroll (para que no aparezca al inicio)
      this.leftColStyle = {
        position: 'static',
        top: undefined,
        left: undefined,
        width: '24rem',
        visibility: 'hidden',
        pointerEvents: 'none',
      };
    }
  }
}
