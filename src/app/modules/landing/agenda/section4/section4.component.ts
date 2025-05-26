import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component {

  @ViewChildren('card') cards!: QueryList<ElementRef>;
  visibleCards: boolean[] = Array(8).fill(false);

  ngAfterViewInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    this.cards.forEach((card, i) => {
      const rect = card.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
        this.visibleCards[i] = true;
      }
    });
  }
}
