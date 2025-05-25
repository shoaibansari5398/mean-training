// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'myProject1';
// }


import { Component,ViewEncapsulation } from '@angular/core';


@Component({
  standalone:false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  
})
export class AppComponent {
  title = 'myProject';
  companyName:string;
  isMember:boolean;
  fruits: string[];
  ctr:number;
  empObj:any;
  dob:Date;
  imgUrl:string;

  constructor(){
    this.companyName = "Tech Company";
    this.isMember = true;
    this.fruits= ['Apple', 'Banana', 'Orange'];
    this.ctr=10;
    this.empObj={
      empId: 101,
      empName: 'John Doe',
      salary: 50000,
    }
    this.dob = new Date('1990-01-01');
    this.imgUrl="download.jpg";
  }



}
