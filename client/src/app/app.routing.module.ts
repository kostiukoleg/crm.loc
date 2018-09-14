import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginPageComponent
            },
            {
                path: 'register',
                component: RegisterPageComponent
            }
        ]
    },
    { path: '', component: SiteLayoutComponent, children: [] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}