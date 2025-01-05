import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterValue = 0; // The counter value starts at 0

  // This method will increment the counter when called
  incrementCounter() {
    this.counterValue++;
  }
}
