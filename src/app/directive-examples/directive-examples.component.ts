import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-examples',
  standalone: false,
  // imports: [],
  templateUrl: './directive-examples.component.html',
  styleUrl: './directive-examples.component.css'
})
export class DirectiveExamplesComponent {
  myFavColor: string;
  myBorder: string;

  constructor(){
    this.myFavColor = 'orange';
    this.myBorder = '2px solid black';
  }

}
