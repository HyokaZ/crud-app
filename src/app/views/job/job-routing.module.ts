import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './job.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
  path: '',
  component: JobComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
