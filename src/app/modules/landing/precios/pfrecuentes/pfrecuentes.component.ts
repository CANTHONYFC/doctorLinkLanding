import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-pfrecuentes',
  templateUrl: './pfrecuentes.component.html',
  styleUrls: ['./pfrecuentes.component.scss']
})
export class PfrecuentesComponent {
  @ViewChildren('animElem') animElems!: QueryList<ElementRef>;
  visibleElements: boolean[] = [];

  ngAfterViewInit() {
    this.visibleElements = new Array(this.animElems.length).fill(false);
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    this.animElems.forEach((elem, i) => {
      const rect = elem.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
        this.visibleElements[i] = true;
      }
    });
  }
}
