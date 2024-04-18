import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { TranslatorService } from '../../core/services/translator.service';
import { LoginService } from '../../core/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hide: boolean = true;
  loginForm?: FormGroup;

  constructor(private fb: FormBuilder, public translatorService: TranslatorService, public loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
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
