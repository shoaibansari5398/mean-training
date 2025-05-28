import { Component, EventEmitter, Output } from '@angular/core';
import { Products } from '../../model/Products';
import { Cart } from '../Cart';

@Component({
  selector: 'app-product-display',
  standalone: false,
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css',
})
export class ProductDisplayComponent {
  productsArr: Products[];
  showAddToCart: boolean;
  selectedProduct: Products | null;
  cart: any[];
  @Output() cartChanged: EventEmitter<Cart[]> = new EventEmitter<Cart[]>();

  constructor() {
    this.showAddToCart = false;
    this.selectedProduct = null;
    this.cart = [];
    this.productsArr = [
      new Products(
        1,
        'Samsung M05',
        'samsung.webp',
        'Samsung Galaxy M05 (Mint Green, 4GB RAM, 64 GB Storage) | 50MP Dual Camera | Bigger 6.7" HD+ Display | 5000mAh Battery | 25W Fast Charging | 2 Gen OS Upgrade &amp; 4 Year Security Update | Without Charge',
        100,
        10
      ),
      new Products(
        2,
        'Apple Charger',
        'charger.webp',
        'Apple 20W USB-C Power Adapter (for iPhone, iPad &amp; AirPods)',
        200,
        5
      ),
      new Products(
        3,
        'Apple Iphone',
        'iphone.webp',
        'Apple iPhone 15 (128 GB) - Black',
        300,
        7
      ),
      new Products(
        4,
        'Samsung M35',
        'samsungm35.webp',
        'Samsung Galaxy M35 5G (Daybreak Blue,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber | 6000mAh Battery | 120Hz Super AMOLED Display| Without Charger',
        400,
        4
      ),
      new Products(
        5,
        'Sandisk Memory Card',
        'memorycard.webp',
        'SAMSUNG EVO Plus 128GB Micro SDXC w/SD Adaptor, Up-to 160MB/s, Expanded Storage for Gaming Devices, Android Tablets and Smart Phones, Memory Card, MB-MC128SA/I',
        500,
        3
      ),
    ];
  }

  addToCart(selectedProduct: Products) {
    console.log('add cart clicked');
    this.selectedProduct = selectedProduct;
    this.showAddToCart = true;
  }

  sendDataFromAddToCartToPDEventHandler(cartObj: Cart | null) {
    if (cartObj != null) {
      const pos = this.productsArr.findIndex(
        (product) => product.productId == cartObj.productId
      );

      if (pos >= 0) {
        this.productsArr[pos].quantity -= cartObj.quantitySelected;
      }

      this.cart.push(cartObj);

      this.cartChanged.emit(this.cart); // Emit updated cart

      this.showAddToCart = false;
      this.selectedProduct = null;
    }
  }

  sendCancelEventFromAddToCartPDEventHandler() {
    this.showAddToCart = false;
    // selectProduct--null
    this.selectedProduct = null;
  }
}