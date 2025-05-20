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
      titulo: 'Empatía',
      descripcion: 'Tratamos de ver el mundo desde la perspectiva de los médicos/pacientes y crear un trabajo que encaje en sus vidas y se adapte a sus necesidades.',
    },
    {
      titulo: 'Consentimiento es clave',
      descripcion: 'Derecho a saber que, cuando y como usamos su información. Privado, secreto, discreto, pertenencia, diferente.',
    },
    {
      titulo: 'Colaboración',
      descripcion: 'Sabemos que es mejor trabajar en conjunto con otras personas y buscar combinar sus fortalezas complementarias.',
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
      // Pegado al final del contenedor
      this.leftColStyle = {
        position: 'absolute',
        top: `${rightHeight - leftHeight}px`,
        left: `${this.leftOriginalLeft}px`,
        width: '24rem',
        visibility: 'visible',
        pointerEvents: 'auto',
      };
    } else if (scrollY >= containerTop - 80) {
      // Posición fija mientras hace scroll
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
      // ⚠️ CAMBIA esta parte para que sea visible desde el inicio
      // Antes estaba como oculto: visibility: hidden
      // Ahora se mantiene en posición absoluta arriba
      this.leftColStyle = {
        position: 'absolute',
        top: '0px',
        left: `${this.leftOriginalLeft}px`,
        width: '24rem',
        visibility: 'visible',
        pointerEvents: 'auto',
      };
    }
  }

}
