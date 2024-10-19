import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private booksArray: any[] = [];
  booksUpdated = new EventEmitter<any[]>();

  constructor() {
    if (this.isBrowser()) {
      this.loadBooksFromStorage();
    }
  }

  addBook(book: {
    image: string;
    title: string;
    author: string;
    year: string;
    indication: string;
    description: string;
  }) {
    this.booksArray.push(book);
    this.saveBooksToStorage();
    this.booksUpdated.emit(this.booksArray);
  }

  getBooks() {
    return this.booksArray;
  }

  private saveBooksToStorage() {
    if (this.isBrowser()) {
      localStorage.setItem('booksArray', JSON.stringify(this.booksArray));
    }
  }

  private loadBooksFromStorage() {
    if (this.isBrowser()) {
      const books = localStorage.getItem('booksArray');
      if (books) {
        this.booksArray = JSON.parse(books);
      }
    }
  }

  private isBrowser(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    );
  }
}
