import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobPopupComponent } from '../../job/job-popup/job-popup.component';
import { service } from 'src/app/service/service';

@Component({
  selector: 'app-pat-popup',
  templateUrl: './pat-popup.component.html',
  styleUrls: ['./pat-popup.component.scss']
})
export class PatPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<JobPopupComponent>,
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
        this.http.put(`${this.service.url}edit_pat/${this.form.value.id}`, this.form.value).subscribe((response: any) => {
          this.dialogRef.close()
        })
      } else {
        this.http.post(`${this.service.url}add_pat`, this.form.value).subscribe((response: any) => {
          this.dialogRef.close()
        })
      }
    }
  }
}
