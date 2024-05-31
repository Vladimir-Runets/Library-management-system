import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LoginService } from '../../core/services/login.service';
import { PasswordValidator } from '../../core/validators/password-validator';

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
