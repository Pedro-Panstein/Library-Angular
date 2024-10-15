import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-book',
  templateUrl: './modal-add-book.component.html',
  styleUrls: ['./modal-add-book.component.scss'],
})
export class ModalAddBookComponent {
  bookName: String = '';
  authorName: String = '';
  bookYear: String = '';
  bookIndication: String = '';
  bookDescription: String = '';

  constructor(public dialogRef: MatDialogRef<ModalAddBookComponent>) {}

  //Image input
  uploadFile() {
    const inputFile = document.getElementById('file') as HTMLElement;
    inputFile?.click();
  }

  onFileSelected(event: any) {
    const textUpload = document.querySelector('.drag-select p') as HTMLElement;
    const file = event.target.files[0];
    this.handleFileUpload(file, textUpload);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const textUpload = document.querySelector('.drag-select p') as HTMLElement;
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.handleFileUpload(file, textUpload);
    }
    this.resetDragStyles();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    const uploadArea = event.target as HTMLElement;
    uploadArea.classList.add('dragging');
  }

  onDragLeave(event: DragEvent) {
    this.resetDragStyles();
  }

  handleFileUpload(file: File, textUpload: HTMLElement) {
    if (!file) return;

    const validTypes = ['image/png', 'image/jpeg'];
    if (!validTypes.includes(file.type)) {
      textUpload.textContent = 'Arquivo inválido';
      textUpload.style.color = 'var(--red)';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      textUpload.style.color = 'var(--gray)';
      const imageElement = document.getElementById('image') as HTMLImageElement;
      imageElement.src = e.target.result;
      imageElement.style.marginRight = '15px';
    };

    reader.readAsDataURL(file);
    textUpload.textContent = 'Clique aqui caso queira selecionar outra imagem';
  }

  resetDragStyles() {
    const uploadArea = document.querySelector('.upload-image') as HTMLElement;
    uploadArea.classList.remove('dragging');
  }

  //Titule input

  closeModal() {
    this.dialogRef.close();
  }
}
