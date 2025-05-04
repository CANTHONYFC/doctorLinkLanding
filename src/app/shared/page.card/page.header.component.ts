import { Component, Input,  TemplateRef } from '@angular/core';
@Component({
    selector: 'app-page-header',
    templateUrl: './page.header.component.html',
    styleUrls: [],
})
export class PageHeaderComponent  {
    @Input() title: string = '';
    @Input() titleClass: string = '';
    @Input() titleAditionalApp: TemplateRef<any>;
}
