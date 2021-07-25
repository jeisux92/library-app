import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Book } from '../models/book';
import { BookAdmin } from '../models/book-admin';
import { CreateBook } from '../models/create-book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl: String;
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.urlAPI;
  }

  getBooksAsync = () => this.httpClient.get<Book[]>(`${this.apiUrl}/books/getAll`);

  getBooksAdminAsync = () => this.httpClient.get<BookAdmin[]>(`${this.apiUrl}/books/getAll`);

  getBooksByTitleAsync = (title: string) => this.httpClient.get<Book[]>(`${this.apiUrl}/books?title=${title}`);

  getBooksByTitleAdminAsync = (title: string) => this.httpClient.get<BookAdmin[]>(`${this.apiUrl}/books?title=${title}`);

  updateBookAsync = (id: number, book: BookAdmin | undefined) => this.httpClient.put(`${this.apiUrl}/books/${id}`,
    book
  );

  createBookAsync = (book: CreateBook) => this.httpClient.post(`${this.apiUrl}/books`, book)

}
