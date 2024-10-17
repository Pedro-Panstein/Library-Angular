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

    this.createBook("../../../assets/image-test.png", "Senhor do anéis", "Descrição do livro")

    this.booksArray.forEach(e => {
      console.log(e)
    })
  }

  createBook(image: string, title: string, description: string) {
    const booksContent = document.querySelector(".books-content");
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    img.src = image;
    img.alt = "Capa do livro"
    h3.innerHTML = `Title: <span>${title}</span>`;
    p.textContent = description;
    article.classList.add("book");

//    <article _ngcontent-ng-c3412290471 class="book">
//      <img src="../../../assets/image-test.png" alt="capa do livro">
//      <h3>Title: <span>Senhor dos anéis</span></h3>
//      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi autem exercitationem totam, iure itaque deleniti ratione aperiam corporis, odit molestias sed vero incidunt ea ducimus.</p>
//    </article>

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(p);
    booksContent?.appendChild(article);
  }
}

