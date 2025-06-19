import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../../shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {PrivacyComponent} from "./policies/privacy/privacy.component";
import {PoliciesRoutingModule} from "./policies-routing.module";
import {FooterComponent} from "./policies/footer/footer.component";
import {NavComponent} from "./policies/nav/nav.component";
import {NavMainModule} from "../nav-main/nav-main.module";


@NgModule({
    declarations: [
        PrivacyComponent,
        FooterComponent,
        NavComponent
    ],
    imports: [
        RouterModule.forChild(PoliciesRoutingModule),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
        NavMainModule,
    ]
})
export class PoliciesModule {
}

