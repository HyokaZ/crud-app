import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from "@angular/common";

import { UserComponent } from './views/user/user.component';
import { UserPopupComponent } from "./views/user/user-popup/user-popup.component";
import { HomeComponent } from './views/home/home.component';
import { JobComponent } from './views/job/job.component';
import { service } from 'src/app/service/service';
import { JobPopupComponent } from './views/job/job-popup/job-popup.component'
import {MatSelectModule} from '@angular/material/select';
import { BookComponent } from './views/book/book.component';
import { BookPopupComponent } from "./views/book/book-popup/book-popup.component";
import { PatComponent } from './views/pat/pat.component';
import { PatPopupComponent } from './views/pat/pat-popup/pat-popup.component';
import { LovComponent,  } from './service/lov/lov.component';
import { LovService } from './service/lov/lov.service';
import { EmpComponent } from './views/emp/emp.component';
import { EmpPopupComponent } from './views/emp/emp-popup/emp-popup.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserPopupComponent,
    JobComponent,
    JobPopupComponent,
    BookComponent,
    BookPopupComponent,
    PatComponent,
    PatPopupComponent,
    LovComponent,
    EmpComponent,
    EmpPopupComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule

    
  ],
  providers: [
    service,
    DatePipe,
    LovService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
