import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { PageCardComponent } from './page.card.component';
import { CommonModule } from '@angular/common';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { PageHeaderComponent } from './page.header.component';
@NgModule({
    declarations: [PageCardComponent,PageHeaderComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatProgressBarModule,
    ],
    exports: [PageCardComponent,PageHeaderComponent],
})
export class PageCardModule {}
