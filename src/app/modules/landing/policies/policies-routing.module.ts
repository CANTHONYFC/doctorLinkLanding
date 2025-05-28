import {Route} from '@angular/router';
import {PrivacyComponent} from "./policies/privacy/privacy.component";

export const PoliciesRoutingModule: Route[] = [
    {
        path: '',
        component: PrivacyComponent
    }
];
