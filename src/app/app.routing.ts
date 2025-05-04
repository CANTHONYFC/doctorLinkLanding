import {Route} from '@angular/router';
import {LayoutComponent} from 'app/layout/layout.component';

export const appRoutes: Route[] = [
    // 👉 Redirección inicial al módulo 'landing'
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app'
    },

    // 👉 Rutas públicas sin autenticación
    {
        path: '',
        // canActivate: [NoAuthGuard],
        // canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {layout: 'empty'},
        children: [
            {
                path: 'app',
                loadChildren: () =>
                    import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)
            },
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import('app/modules/auth/confirmation-required/confirmation-required.module')
                        .then(m => m.AuthConfirmationRequiredModule)
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import('app/modules/auth/forgot-password/forgot-password.module')
                        .then(m => m.AuthForgotPasswordModule)
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import('app/modules/auth/reset-password/reset-password.module')
                        .then(m => m.AuthResetPasswordModule)
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.module')
                        .then(m => m.AuthSignInModule)
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.module')
                        .then(m => m.AuthSignUpModule)
            }
        ]
    },

];
