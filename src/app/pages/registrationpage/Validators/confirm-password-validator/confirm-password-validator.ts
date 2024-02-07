import { AbstractControl, ValidationErrors, ValidatorFn,} from '@angular/forms';


export function confirmPasswordValidator(val1: any, val2: any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    let v1 = control.get(val1);
    let v2 = control.get(val2);
    
    if (v1 && v2 && v1?.value != v2?.value) {
      return {
          valuematcherror: true
      }
  }

  return null;
}
}
