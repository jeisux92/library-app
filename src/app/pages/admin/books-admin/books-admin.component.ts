import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from 'src/app/core/books.service';
import { BookAdmin } from 'src/app/models/book-admin';
import { CreateBookComponent } from '../create-book/create-book.component';

@Component({
  selector: 'books-admin',
  templateUrl: './books-admin.component.html',
  styleUrls: ['./books-admin.component.scss']
})
export class BooksAdminComponent implements OnInit {

  displayedColumns: string[] = ['title', 'author', 'loans', 'taken', 'actions'];
  dataSource: BookAdmin[] = [];
  book: string = ''

  constructor(private booksService: BooksService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.booksService.getBooksAdminAsync().subscribe((x: BookAdmin[]) => this.dataSource = x)
  }

  search = (): void => {
    this.booksService.getBooksByTitleAdminAsync(this.book).subscribe((x: BookAdmin[]) => this.dataSource = x)
  }

  taken = async (id: number): Promise<void> => {
    let bookToUpdate: BookAdmin | undefined = this.dataSource.find(x => x.id === id);
    bookToUpdate!.taken = !bookToUpdate?.taken;
    if (bookToUpdate?.taken) {
      bookToUpdate.loans++;
    }
    await this.booksService.updateBookAsync(id, bookToUpdate).toPromise()
  }

  openCreationModal = (): void => {
    let modal = this.dialog.open(CreateBookComponent)
    modal.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.booksService.getBooksByTitleAdminAsync(this.book).subscribe((x: BookAdmin[]) => this.dataSource = x)
      }
    });
  }

  openEditModal = (book: BookAdmin): void => {
    let modal = this.dialog.open(CreateBookComponent, { data: { ...book } })
    modal.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.booksService.getBooksByTitleAdminAsync(this.book).subscribe((x: BookAdmin[]) => this.dataSource = x)
      }
    });
  }
}
