import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddBookComponent } from '../../pages/modals/modal-add-book/modal-add-book.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
  constructor(public dialog: MatDialog) {}

  openSidebar() {
    const sidebarContent = document.querySelector('.sidebar-content');
    const menuBar = document.querySelector('.menu-bar');
    sidebarContent?.classList.toggle('hidden');
    menuBar?.classList.toggle('close');
  }

  openModalAddBook() {
    this.dialog.open(ModalAddBookComponent, {
      height: '80%',
      width: '800px',
    });
  }
}