import { AbstractControl, ValidationErrors, ValidatorFn,} from '@angular/forms';


export function emailValidator(emailvalue: any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    let ev = control.get(emailvalue)
    
    const emailRegex = /.+@.+\\.[a-zA-Z]{1,}/;

    if (ev && !emailRegex.test(ev.value)) {
      control.setErrors({ 'invalidEmail': true })
    }

  return null;
}
}