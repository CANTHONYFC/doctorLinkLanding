import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-whatsapp-button',
  templateUrl: './floating-whatsapp-button.component.html',
  styleUrls: ['./floating-whatsapp-button.component.scss']
})
export class FloatingWhatsappButtonComponent {
  whatsappNumber: string = '51987306885';

  openWhatsApp() {
    window.open(`https://wa.me/${this.whatsappNumber}`, '_blank');
  }
}
