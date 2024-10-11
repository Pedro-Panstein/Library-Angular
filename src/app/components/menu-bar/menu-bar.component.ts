import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

  openSidebar() {
    const sidebarContent = document.querySelector(".sidebar-content");
    const menuBar = document.querySelector(".menu-bar");
    sidebarContent?.classList.toggle("hidden");   
    menuBar?.classList.toggle("close");
  }
}
