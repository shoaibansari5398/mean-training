import { Component } from '@angular/core';

@Component({
  selector: 'app-register-template',
  standalone: false,
  templateUrl: './register-template.component.html',
  styleUrl: './register-template.component.css'
})
export class RegisterTemplateComponent {

  submitEventHandler(registerFormValues: any) {
    console.log(registerFormValues)
    // send this data to server using post
  }

}
