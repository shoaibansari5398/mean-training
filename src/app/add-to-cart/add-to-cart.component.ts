import { Component, Input } from '@angular/core';
import { Products } from '../../model/Products';

@Component({
  selector: 'app-add-to-cart',
  standalone: false,
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  @Input("selectedProduct") product : Products |null;
  quantitySelected: number;

  constructor() {
    this.product = null;
    this.quantitySelected = 1;
  }

  decreaseQuantity() {
    if (this.quantitySelected > 1) {
      this.quantitySelected--;
    }
  }

  increaseQuantity() {
    if (this.product && this.quantitySelected < this.product.quantity) {
      this.quantitySelected++;
    }
  }

  // modifyQuantity(op: string) {
  //   if (op == 'inc') {
  //     if (this.quantitySelected > 1) {
  //     this.quantitySelected--;
  //   }
  //   } else{
  //      if (this.product && this.quantitySelected < this.product.quantity) {
  //     this.quantitySelected++;
  //   }
  //   }
  // }

}
