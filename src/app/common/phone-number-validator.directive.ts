import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[phoneNumberValidator] [ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneNumberValidatorDirective, multi: true}]
})
export class PhoneNumberValidatorDirective implements Validator{

  validate(c: AbstractControl): ValidationErrors {
    const value:string = c.value;
    const regexp:RegExp = new RegExp(/^\d{3}-\d{3}-\d{4}$/);
    const matches:boolean = regexp.test(value);
    if(!matches){
      return {numberInvalid:true};
    }
    return null;
  }


}
