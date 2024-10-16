import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ModalAddBookComponent } from '../../pages/modals/modal-add-book/modal-add-book.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) { }

  openModalAddBook() {
    this.dialog.open(ModalAddBookComponent, {
      height: '90%',
      width: '800px',
      maxHeight: '1000px',
    })
  }

}
