import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'combust';
  isAuthenticated = false;
  userData: any;

  constructor(private oidcSecurityService: OidcSecurityService) { }

  ngOnInit(): void {
    // Checking authentication status and retrieving user data
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated; // Authentication status
      if (isAuthenticated) {
        this.userData = this.oidcSecurityService.getUserData(); // Get user data after authentication
      }
    });

  }

  login(): void {
    // Start the login flow
    this.oidcSecurityService.authorize();
  }

  logout(): void {
    // Log the user out and remove tokens
    this.oidcSecurityService.logoff();
  }
}
