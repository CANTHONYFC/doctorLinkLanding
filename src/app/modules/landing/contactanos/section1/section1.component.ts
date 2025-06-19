import {Component} from '@angular/core';

@Component({
    selector: 'app-section1',
    templateUrl: './section1.component.html',
    styleUrls: ['./section1.component.scss']
})
export class Section1Component {
    openLinkWhattsap(): void {
        const url = 'https://api.whatsapp.com/send/?phone=51987306885&text&type=phone_number&app_absent=0';
        window.open(url, '_blank');
    }
}
