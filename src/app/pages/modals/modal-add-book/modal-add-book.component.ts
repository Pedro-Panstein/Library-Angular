import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-modal-add-book',
  templateUrl: './modal-add-book.component.html',
  styleUrls: ['./modal-add-book.component.scss'],
})
export class ModalAddBookComponent {
  bookName: string = '';
  authorName: string = '';
  bookYear: string = '';
  bookIndication: string = '';
  bookDescription: string = '';
  imageUrl: string = '';

  constructor(
    public dialogRef: MatDialogRef<ModalAddBookComponent>,
    private sharedService: SharedService,
  ) {}

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
      this.imageUrl = e.target.result;
    };

    reader.readAsDataURL(file);
    textUpload.textContent = 'Clique aqui caso queira selecionar outra imagem';
  }

  resetDragStyles() {
    const uploadArea = document.querySelector('.upload-image') as HTMLElement;
    uploadArea.classList.remove('dragging');
  }

  //Titule input
  addBook() {
    this.createBook(this.imageUrl, this.bookName, this.authorName, this.bookYear, this.bookIndication, this.bookDescription);
    this.closeModal();
  }

  createBook(image: string, title: string, author: string, year: string, indication: string, description: string) {
    const booksContent = document.querySelector(".books-content") as HTMLElement;

    const book = {image, title, author, year, indication, description}
    this.sharedService.addBook(book);
  }
 
  closeModal() {
    this.dialogRef.close();
  }
}
