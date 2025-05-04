import { Component, Input, TemplateRef } from '@angular/core';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';
@Component({
    selector: 'app-page-card',
    templateUrl: './page.card.component.html',
    styleUrls: [],
})
export class PageCardComponent  {
    @Input() title: string = '';
    @Input() message: string = '';
    @Input() classForm: string = 'sm:p-4';
    @Input() titleClass: string = '';
    @Input() list: any[];
    @Input() paginator: any;
    @Input() showLoadSearch: boolean;
    @Input() searchApp: TemplateRef<any>;
    @Input() tableApp: TemplateRef<any>;
    @Input() titleAditionalApp: TemplateRef<any>;
    setPageSizeOptions(e: PageEvent) {
        this.paginator.parameter.size = e.pageSize;
        this.paginator.count = e.length;
        this.paginator.parameter.page = e.pageIndex;
        this.paginator.search(this.paginator.parameter);
      }
}
