import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatCardModule
    ]
})
export class SharedModule
{
}
