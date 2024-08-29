import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { service } from 'src/app/service/service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LovService } from 'src/app/service/lov/lov.service';

@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.scss']
  
})
export class UserPopupComponent {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  displayedColumns: string[] = ['name', 'action'];
  dataSource: any = new MatTableDataSource();

  constructor(
    public dialogRef: MatDialogRef<UserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private service:service,
    private lov:LovService,
  ) { }
  

  form: FormGroup = this.formBuilder.group(
    {
      id: 0,
      name: ['', Validators.required],
      salary: ['', Validators.required],
      job_id: ['', Validators.required],
      book_id: ['', Validators.required],
      pat_id: ['', Validators.required],
      lov_id: ['', Validators.required],
      
    }
  );

  ngOnInit() {
    this.getBook()
    this.getPat()
    this.getJobs()
    if(this.data){
      this.form.patchValue(this.data)
      this.getDetail(this.data.id)
      this.getLov()
    }else{
      this.addArray(-1)}
    
    
  }

  jobArray : any[] = []
  bookArray: any[] = []
  patArray: any[] = []

  addArray(i:any){
    this.dataSource.data.splice(i + 1, 0, {
      id: 0,
      name:""
    })
    this.dataSource.data =[...this.dataSource.data]
    this.dataSource.paginator = this.paginator
  }

  deleteArray(i:any, element:any){
    if(this.dataSource.data.length > 1){
      if(element.id >0 ){
        this.http.delete(`${this.service.url}delete_detail/${element.id}`).subscribe()
      }
      this.dataSource.data.splice(i, 1)
      this.dataSource.data =[...this.dataSource.data]
      this.dataSource.paginator = this.paginator
    }
  }
  getJobs(){
    this.http.get(`${this.service.url}get_all_job`).subscribe((response: any)=>{
      if(response.length > 0){
        this.jobArray = response
      }
    })
  }
  getBook(){
    this.http.get(`${this.service.url}get_all_book`).subscribe((response: any)=>{
      if(response.length > 0){
        this.bookArray = response
      }
    })
  }
  getPat(){
    this.http.get(`${this.service.url}get_all_pat`).subscribe((response: any)=>{
      console.log(response)
      if(response.length > 0){
        this.patArray = response
      }
    });
  }
  getDetail(id:any){
    this.http.get(`${this.service.url}get_detail_by_user_id/${id}`).subscribe((response:any)=>{
      if(response.length > 0){
        response.forEach((e: any, i:any) =>{
          //Array method JAvacript
          //push นำชุดสุดท้ายเข้า => daata =[1,2,3].puush(2)[1,2,3,4]
          //pop นำชุดสุดท้ายออก => data = [1,2,3,4] .pop()[1,2,3]
          //unshift นำชุดแรก => data = [1,2,3] .unship(1)[1,2,3]
          //shift นำชุดแรกออก => data =[1,2,3] .shift() [2,3]
          //spilce แทรกข้อมูลใน array
          this.dataSource.data.push({
            id: e[0],
            name:e[1],
            user_id:e[2]
          })
          if(response.length ===i +1){
            this.dataSource.data = [...this.dataSource.data]
            this.dataSource.paginator = this.paginator
          }
        })
      }
    })
  }
  getLov(){
    this.http.get(`${this.service.url}get_job_by_id/${this.form.value.lov_id}`).subscribe((response: any)=>{
      this.lovData.name = response.name
      this.lovData.id = response.id
      
    });
  }
  save() {
    this.form.patchValue({
      lov_id: this.lovData.id
    })
    if (this.form.valid) {
      if (this.form.value.id > 0) {
        this.http.put(`${this.service.url}edit_user/${this.form.value.id}`, this.form.value).subscribe((response: any) => {
          console.log(this.form.value)
          this.dataSource.data.forEach((e:any,i:any)=>{
            if(e.id > 0){
              let data = {
                id: e.id,
                name: e.name,
                user_id: e.user_id
              }
              this.http.put(`${this.service.url}edit_detail/${e.id}`,data).subscribe()
            }else{
              let data = {
        
                name: e.name,
                user_id: this.data.id
              }
              this.http.post(`${this.service.url}add_detail`,data).subscribe()
            }
          })
          
          // callback function ()=>{}
          this.dialogRef.close()
        })
      } else {
        this.http.post(`${this.service.url}add_user`, this.form.value).subscribe((response: any) => {
          this.dataSource.data.forEach((e: any) =>{
            let data = {
              name: e.name,
              user_id: response.id

            }
            this.http.post(`${this.service.url}add_detail`,data).subscribe()
          });
          this.dialogRef.close()
        })
      }
    }
  }
  lovData ={
    id: 0,
    code: "",
    name: "",
  }
  useLOV(){
    this.lov.popup('get_jobs').subscribe((response: any) =>{
      if(response){
        this.lovData = {
          id: response.id,
          code: response.code,
          name: response.name
        }
      }
    })
  }

}
