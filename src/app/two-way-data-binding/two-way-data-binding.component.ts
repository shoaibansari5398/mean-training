import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  standalone: false,
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {

  countryName:string;
  personName:string;
  fieldNameArr:string[];
  fieldName:string;

  constructor() {
    this.countryName = 'India';
    this.personName = 'John Doe';
    this.fieldNameArr = ['productId','productName','price','quantity','description'];
    this.fieldName = '';
  }

  inputEventHandler(event: any): void {
    this.countryName = event.target.value;
  }

}
