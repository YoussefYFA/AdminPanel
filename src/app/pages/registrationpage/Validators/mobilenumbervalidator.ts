import { AbstractControl, ValidationErrors, ValidatorFn,} from '@angular/forms';


export function mobilenumberValidator(mobilevalue: any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    let mn = control.get(mobilevalue)
    
    const phoneNumRegex = /^\d{11}$/; // Only digits, 11 characters

    if (mn && !phoneNumRegex.test(mn.value)) {
      return { invalidPhoneNumber: true };
    }

  return null;
}
}