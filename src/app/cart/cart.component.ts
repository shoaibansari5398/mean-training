import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  @Input() cartItems: any[];

  constructor(){
    this.cartItems = [];
  }
}