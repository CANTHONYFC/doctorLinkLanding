import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component {
 images: string[] = [
    'https://framerusercontent.com/images/j9xwhFIBsIhhyXTgm37Ejk8tnRg.png?scale-down-to=512',
    'https://framerusercontent.com/images/lbTYE6vf9oadFyUBmPo1anopHw.png?scale-down-to=512',
    'https://framerusercontent.com/images/ryZMqoD5IraBM9My1w0TFearLPU.png?scale-down-to=512'
  ];

  selectedImage: string = this.images[0];

  changeImage(index: number): void {
    this.selectedImage = this.images[index];
  }
}
