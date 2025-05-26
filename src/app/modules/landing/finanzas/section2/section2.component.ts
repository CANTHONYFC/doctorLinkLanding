import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component {
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
    this.cards.forEach((card, index) => {
      const rect = card.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
        this.visibleCards[index] = true;
      }
    });
  }
}
