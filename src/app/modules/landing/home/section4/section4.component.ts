import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-section4',
    templateUrl: './section4.component.html',
    styleUrls: ['./section4.component.scss'],
})
export class Section4Component {
 @ViewChild('gridContainer') gridContainer!: ElementRef<HTMLDivElement>;
  observer!: IntersectionObserver;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Cuando el grid aparece en pantalla
            this.renderer.addClass(this.gridContainer.nativeElement, 'animate');
          } else {
            // Cuando el grid sale de pantalla (oculto)
            this.renderer.removeClass(this.gridContainer.nativeElement, 'animate');
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.1 // 10% visible para activar
      }
    );

    if (this.gridContainer && this.gridContainer.nativeElement) {
      this.observer.observe(this.gridContainer.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
