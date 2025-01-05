import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { routing } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataEventRecordsModule } from './pages/dataeventrecords/dataeventrecords.module';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/counter/counter.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';  // For the list in the sidenav

import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
      BrowserModule,
      BrowserAnimationsModule, // Add this
      FormsModule,
      routing,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatSidenavModule,
      MatMenuModule,
      MatIconModule,  // for menu icon
      MatListModule,
      HttpClientModule,
      DataEventRecordsModule,
      AuthModule.forRoot({
        config: {
            authority: 'https://localhost:44395',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'angular-client',
            scope: 'openid profile email dataEventRecords offline_access',
            responseType: 'code',
            silentRenew: true,
            renewTimeBeforeTokenExpiresInSeconds: 10,
            useRefreshToken: true,
            logLevel: LogLevel.Debug,
        },
      }),
  ],
  declarations: [
      AppComponent,
      ForbiddenComponent,
      HomeComponent,
      CounterComponent,
      UnauthorizedComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor() {
      console.log('APP STARTING');
  }
}
