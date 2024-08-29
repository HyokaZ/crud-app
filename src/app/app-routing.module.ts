import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./views/user/user.module').then(m => m.UserModule),
  },
  {
    path: 'job',
    loadChildren: () => import('./views/job/job.module').then(m => m.JobModule),
  },
  {
    path: 'book',
    loadChildren: () => import('./views/book/book.module').then(m => m.BookModule),
  },
  {
    path: 'pat',
    loadChildren: () => import('./views/pat/pat.module').then(m => m.PatModule),
  },
  
  {
    path: 'emp',
    loadChildren: () => import('./views/emp/emp.module').then(m => m.EmpModule),
  },
  
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
