import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { service } from 'src/app/service/service';

@Component({
  selector: 'app-book-popup',
  templateUrl: './book-popup.component.html',
  styleUrls: ['./book-popup.component.scss']
})
export class BookPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<BookPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private service:service
  ) { }

  form: FormGroup = this.formBuilder.group(
    {
      id: 0,
      name: ['', Validators.required],
      
    }
  );

  ngOnInit() {
    if (this.data) {
      this.form.patchValue(this.data)
    }
  }

  save() {
    if (this.form.valid) {
      if (this.form.value.id > 0) {
        this.http.put(`${this.service.url}edit_book/${this.form.value.id}`, this.form.value).subscribe((response: any) => {
          this.dialogRef.close()
        })
      } else {
        this.http.post(`${this.service.url}add_book`, this.form.value).subscribe((response: any) => {
          this.dialogRef.close()
        })
      }
    }
  }
}
