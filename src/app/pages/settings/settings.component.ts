import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  nameAccount: string = '';

  constructor() {}

  ngOnInit(): void {
    const nameAccount = document.getElementById("nameAccount") as HTMLElement;
      nameAccount.textContent = localStorage.getItem('user') ?? '';
  }
}
