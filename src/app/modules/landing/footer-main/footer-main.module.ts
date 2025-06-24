import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterMainComponent} from './footer-main/footer-main.component';
import {RouterLink} from "@angular/router";


@NgModule({
    declarations: [
        FooterMainComponent
    ],
    imports: [
        CommonModule,
        RouterLink
    ], exports: [FooterMainComponent]
})
export class FooterMainModule {
}
