import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksAdminComponent } from './books-admin/books-admin.component';
import { SharedModule } from '../../shared/shared.module';
import { BooksService } from 'src/app/core/books.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  { path: '', component: BooksAdminComponent }
];


@NgModule({
  declarations: [
    BooksAdminComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    BooksService
  ]
})
export class AdminModule { }
