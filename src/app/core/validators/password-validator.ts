import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export function PasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password: string = control.value;
      if (password.length === 0) {
        return { passwordInvalid: 'requiredField' };
      }
    
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
    
      if (!hasUppercase && !hasNumber) {
        return { passwordInvalid: 'hasNotUppercaseAndNumber' };
      }
    
      if (!hasUppercase) {
        return { passwordInvalid: 'hasNotUppercase' };
      }
    
      if (!hasNumber) {
        return { passwordInvalid: 'hasNotNumber' };
      }
      
      return null;
    }
  }