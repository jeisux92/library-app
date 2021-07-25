import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';
import { Book } from 'src/app/models/book';



@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author', 'taken'];
  dataSource: Book[] = [];
  book: string = ''

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooksAsync().subscribe((x: Book[]) => this.dataSource = x)
  }

  search = (): void => {
    this.booksService.getBooksByTitleAsync(this.book).subscribe((x: Book[]) => this.dataSource = x)
  }
}
