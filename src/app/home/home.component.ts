import { Component } from '@angular/core';
import { Cart } from '../Cart';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showCart: boolean = false;
  cartData: Cart[];

  constructor(){
    this.cartData = [];
  }

  showElement(componentName: string) {
    this.showCart = componentName === 'cart';
  }

  receiveCartData(cart: Cart[]) {
    this.cartData = cart;
  }
}