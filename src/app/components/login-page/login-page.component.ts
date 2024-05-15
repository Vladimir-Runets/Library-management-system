import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'
import { LoginService } from '../../core/services/login.service';

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

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide: boolean = true;
  loginForm?: FormGroup;

  constructor(private fb: FormBuilder, public loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, PasswordValidator()]]
    });
  }

  onLogin(): void {
    if (this.loginForm && this.loginForm.valid) {
      const { login, password } = this.loginForm.getRawValue();
      this.loginService.login(login, password);
    }
  }

  dismissErrorMessage(){
    this.loginService.showErrorMessage = false;
  }
}
