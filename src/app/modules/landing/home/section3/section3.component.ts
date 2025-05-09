import { Component } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component {
  logos = [
    { src: 'https://framerusercontent.com/images/YnNE8DhqnlCvD8tlFj3UcpkCCaw.png?scale-down-to=512', alt: 'Logo 1' },
    { src: 'https://framerusercontent.com/images/53v1oxDQuQNp8Y76yEz4aEQJ3Fg.png', alt: 'Logo 2' },
    { src: 'https://framerusercontent.com/images/kfuQ1NgPLlh8gDK3XDb83iPZelc.png', alt: 'Logo 3' },
    { src: 'https://framerusercontent.com/images/9L8S8EhqIxrlCxEYaL68MaI8fI.png', alt: 'Logo 4' },
    { src: 'https://framerusercontent.com/images/JDdzy6yJ4eHIJSXQP0lbdRJ9gJ0.png', alt: 'Logo 5' },
    { src: 'https://framerusercontent.com/images/YnlYEw5fdbsHeWlSFrYcYpr3qIE.png?scale-down-to=512', alt: 'Logo 6' },
    { src: 'https://framerusercontent.com/images/YnNE8DhqnlCvD8tlFj3UcpkCCaw.png?scale-down-to=512', alt: 'Logo 1' },
    { src: 'https://framerusercontent.com/images/53v1oxDQuQNp8Y76yEz4aEQJ3Fg.png', alt: 'Logo 2' },
    { src: 'https://framerusercontent.com/images/kfuQ1NgPLlh8gDK3XDb83iPZelc.png', alt: 'Logo 3' },
    { src: 'https://framerusercontent.com/images/9L8S8EhqIxrlCxEYaL68MaI8fI.png', alt: 'Logo 4' },
    { src: 'https://framerusercontent.com/images/JDdzy6yJ4eHIJSXQP0lbdRJ9gJ0.png', alt: 'Logo 5' },
    { src: 'https://framerusercontent.com/images/YnlYEw5fdbsHeWlSFrYcYpr3qIE.png?scale-down-to=512', alt: 'Logo 6' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
