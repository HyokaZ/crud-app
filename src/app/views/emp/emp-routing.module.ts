import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: EmpComponent
    }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }
