import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatComponent } from './pat.component';

const routes: Routes = [
  {
    path: '',
    component: PatComponent
    }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatRoutingModule { }
