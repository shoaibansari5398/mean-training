import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  showCart: boolean;
  constructor() {
    this.showCart = false;
  }
 
  showElement(componentName: string) {
    if (componentName == 'cart') {
      this.showCart = true;
    }
    else {
      this.showCart = false;
 
    }
  }
}
