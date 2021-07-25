import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from '../../core/books.service';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BooksComponent }
];

@NgModule({
  declarations: [
    BooksComponent
  ],
  providers: [
    BooksService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
