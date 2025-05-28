import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Products } from '../../model/Products';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() modifyProduct: Products | null;
  @Output() modifyProductChange: EventEmitter<Products>;

  constructor() {
    console.log("EditProductComponent constructor called");
    this.modifyProduct = null;
    this.modifyProductChange = new EventEmitter<Products>();
    console.log(this.modifyProduct)
  }
  ngOnInit() {
  }

}
