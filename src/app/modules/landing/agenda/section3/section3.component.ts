import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component {
  @ViewChildren('card') cards!: QueryList<ElementRef>;
  visibleCards: boolean[] = [false, false, false, false];

  ngAfterViewInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
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
