import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonCardComponent } from './button.card.component';
import { CommonModule } from '@angular/common';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
@NgModule({
    declarations: [ButtonCardComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
    ],
    exports: [ButtonCardComponent],
})
export class ButtonCardModule {}
