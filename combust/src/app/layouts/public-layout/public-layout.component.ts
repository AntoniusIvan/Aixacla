import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css']
})
export class PublicLayoutComponent {

  constructor(private router: Router) { }

  login() {
    // Navigate to the OpenIddictServer or handle login logic here
    console.log('Login button clicked');
    // Example redirect (update with your actual login URL)
    window.location.href = 'https://your-openauth-url-here';
  }
}
