import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BooksService } from 'src/app/core/books.service';
import { BookAdmin } from 'src/app/models/book-admin';
import { CreateBook } from 'src/app/models/create-book';

@Component({
  selector: 'create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private booksService: BooksService, private dialogRef: MatDialogRef<CreateBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookAdmin) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.data?.title ?? '', [Validators.required]],
      author: [this.data?.author ?? '', [Validators.required]],
      year: [this.data?.year ?? '', [Validators.required]],
    });
  }

  createOrUpdate = async (): Promise<void> => {
    let book: CreateBook = {
      author: this.form.get('author')?.value,
      title: this.form.get('title')?.value,
      year: this.form.get('year')?.value
    }
    if (this.data) {
      this.data.author = book.author;
      this.data.title = book.title;
      this.data.year = book.year;
      await this.booksService.updateBookAsync(this.data.id, this.data).toPromise();
    }
    else {
      await this.booksService.createBookAsync(book).toPromise();
    }

    this.dialogRef.close(true)
  }

}
