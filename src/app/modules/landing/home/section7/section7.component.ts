import { Component } from '@angular/core';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.scss']
})
export class Section7Component {
  testimonials = [
    { text: "Testimonio 1", bgColor: "bg-blue-500" },
    { text: "Testimonio 2", bgColor: "bg-green-500" },
    { text: "Testimonio 3", bgColor: "bg-red-500" },
    { text: "Testimonio 4", bgColor: "bg-yellow-500" },
  ];
}
