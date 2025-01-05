import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CounterComponent } from './counter/counter.component';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://localhost:44395',  // Your OIDC provider URL (backend service running on localhost)
        redirectUrl: window.location.origin,   // Redirect to your app after login
        postLogoutRedirectUri: window.location.origin, // Redirect after logout
        clientId: 'angularclient',            // Replace with your actual Client ID
        scope: 'openid profile email dataEventRecords offline_access',          // Scopes requested by your app
        responseType: 'code',                  // Use 'code' for PKCE
        silentRenew: true,                     // Enable silent token renewal
        renewTimeBeforeTokenExpiresInSeconds: 10, 
        useRefreshToken: true,                 // Use refresh tokens
        logLevel: LogLevel.Debug // Use LogLevel.Debug instead of 4
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

