import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userName: string = '';

  constructor(private rota: Router) {}

  login() {
    const regex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~°ªº§¢£¬¨´´®¥©×÷±]/;

    if (this.userName == null || this.userName == '') {
      this.error();
    } else if (regex.test(this.userName)) {
      this.error();
    } else if (this.userName.length > 35) {
      this.error();
    } else {
      sessionStorage.setItem('user', this.userName);
      this.rota.navigate(['home']);
    }
  }

  error() {
    const errorMessage = document.querySelector('.error-message');
    const input = document.querySelector('#input-username');

    errorMessage?.classList.remove('hidden');
    input?.classList.add('input-error');
    setTimeout(() => {
      input?.classList.remove('input-error');
      errorMessage?.classList.add('hidden');
    }, 3000);
  }
}
