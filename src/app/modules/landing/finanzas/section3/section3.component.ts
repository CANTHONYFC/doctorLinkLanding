import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component {
  @ViewChildren('card') cards!: QueryList<ElementRef>;
  visibleCards: boolean[] = Array(8).fill(false);

  ngAfterViewInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    this.cards.forEach((card, index) => {
      const rect = card.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Condición para saber si está visible en pantalla (puedes ajustar el margen)
      if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
        this.visibleCards[index] = true;
      }
    });
  }
}
