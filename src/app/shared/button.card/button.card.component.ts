import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-button-card',
    templateUrl: './button.card.component.html',
    styleUrls: [],
})
export class ButtonCardComponent {
    
    @Input() parameters: any[];
 
}
