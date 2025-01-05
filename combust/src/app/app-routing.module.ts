import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component'; // Import the About Us component
import { CounterComponent } from './counter/counter.component'; // Import the CounterComponent

const routes: Routes = [
  // other routes here
  { path: 'about-us', component: AboutUsComponent },
  { path: 'counter', component: CounterComponent }, // Add route for the CounterComponent
  { path: '', redirectTo: '/about-us', pathMatch: 'full' } // Redirect to About Us by default (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
