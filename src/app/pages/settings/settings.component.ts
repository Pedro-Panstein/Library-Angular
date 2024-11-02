import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  nameAccount: string = '';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    if (typeof window != 'undefined') {
      const nameAccountElement = document.getElementById('nameAccount') as HTMLElement;
      if (nameAccountElement) {
        const username = localStorage.getItem('user') ?? '';
        this.renderer.setProperty(nameAccountElement, 'textContent', username);
      }
    }
  }
}
