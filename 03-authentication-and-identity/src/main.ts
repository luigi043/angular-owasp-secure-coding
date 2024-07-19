

import { AuthModule } from 'angular-auth-oidc-client';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AuthModule.forRoot({
            config: {
                authority: 'https://dev-5tvczcmwqvvra5o7.eu.auth0.com', // Enter Issuer
                redirectUrl: `${window.location.origin}`,
                postLogoutRedirectUri: window.location.origin,
                clientId: 'uc4faxGnyaRNvIhsokbPPAunDkGWDutG', // Enter ClientID
                scope: 'openid profile offline_access',
                responseType: 'code',
                silentRenew: true,
                useRefreshToken: true,
                renewTimeBeforeTokenExpiresInSeconds: 30,
            }
        })),
        provideRouter([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
        ])
    ]
})
  .catch(err => console.error(err));
