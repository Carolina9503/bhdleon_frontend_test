import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HamburgerMenuComponent } from '../../components/organisms/hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, HamburgerMenuComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  acces_token: any = {};
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario enviado:', this.loginForm.value);
      this.router.navigate(['/mis-productos']);
    } else {
      console.log('Formulario inválido');
    }
  }

  ngOnInit() {
    this.getTokenData();
  }
  getTokenData() {
    this.loginService.getToken(this.loginForm.value).subscribe((token) => {
      this.acces_token = token;
      localStorage.setItem('token', this.acces_token.access_token);
      console.log('object :>> ', this.acces_token.access_token);
    });
  }
}
