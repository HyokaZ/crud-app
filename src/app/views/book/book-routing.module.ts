import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent
    }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
