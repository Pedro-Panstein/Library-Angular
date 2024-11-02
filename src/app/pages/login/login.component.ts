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
    this.defaultErrorMessage();

    if (this.userName == null || this.userName == '') {
      this.error();
    } else if (this.userName.length > 35) {
      this.characterLimit();
    } else if (regex.test(this.userName)) {
      this.error();
    } else if (this.userName.length <= 2) {
      this.minimumCharacter();
    } else {
      localStorage.setItem('user', this.userName);
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

  characterLimit() {
    const errorP = document.querySelector('.error-message p');
    this.error();
    if (errorP) {
      errorP.textContent = 'Limite de 35 caracteres atingido';
    }
  }

  defaultErrorMessage() {
    const errorP = document.querySelector('.error-message p');
    if (errorP) {
      errorP.textContent = 'Digite um nome inválido';
    }
  }

  minimumCharacter() {
    const errorP = document.querySelector('.error-message p');
    this.error();
    if (errorP) {
      errorP.textContent = 'Mínimo de 3 caracteres';
    }
  }
}