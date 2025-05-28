import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { validateEmailPattern } from './ValidatorFunations/validateEmailPattern';

@Directive({
  standalone:false,
  selector: '[appCheckPasswordPattern]',
  providers:[
    {provide:NG_VALIDATORS,useExisting:CheckEmailPatternDirective,multi:true}
  ]
})
export class CheckEmailPatternDirective implements Validators {
  validate(control: AbstractControl): ValidationErrors | null {
    // return validateEmailPattern()(control);

    console.log(control)
    var passTest:boolean=true;
    
    if(/[A-Z]/.test(control.value) && /[a-z]/.test(control.value) && /[0-9]/.test(control.value) ){

      return null
    }
    else{
      return {passwordPattern:true}
    }
  }

  constructor() { }

}
