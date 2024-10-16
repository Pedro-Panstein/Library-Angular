import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  booksArray: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.booksArray = this.sharedService.getBooks();

    this.sharedService.booksUpdated.subscribe((updatedBooks: any[]) => {
      this.booksArray = updatedBooks;
      console.log('Livros atualizados:', this.booksArray);
    });

    console.log(this.booksArray);
  }

  createBook() {
    
  }
}

