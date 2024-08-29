import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from "@angular/common/http";
import { MatDialog } from '@angular/material/dialog';
import { UserPopupComponent } from './user-popup/user-popup.component';
import { service } from 'src/app/service/service';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {


  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private service:service,
    private datepip:DatePipe,
  ) { }


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  displayedColumns: string[] = ['id', 'name', 'salary','job','book','pat','detail','dateNow','action'];
  dataSource: any = new MatTableDataSource();
 
  ngOnInit() {
    this.getData()
  }

  getData() {
    this.dataSource = []
    this.http.get(this.service.url + 'get_user_and_job').subscribe((response: any) => {
      // console.log(response)
      if (response.length > 0) {
        response.forEach((e : any, i : any) => {

          this.dataSource.push({
            id: e[0],
            name: e[1],
            salary: e[2],
            job_id: e[3],
            job_name: e[4],
            book_id : e[5],
            book_name: e[6],
            pat_id: e[7],
            pat_name: e[8],
            detail:e[9],
            dateNow: new Date(),
            lov_id: e[10]
          })
          if(response.length ===i + 1){
            this.dataSource = [...this.dataSource]
            this.dataSource = new MatTableDataSource(this.dataSource)
            this.dataSource.paginator = this.paginator

      } else {
          }
        });
        this.dataSource = new MatTableDataSource(response)
        this.dataSource.paginator = this.paginator
      } else {
        alert(`DATA NOT FOUND : ${response.length}`)
      }
    })
  }

  

  openDialog(userData: any) {
    const dialogRef = this.dialog.open(UserPopupComponent, {
      width: '800px',
      disableClose: false,
      data: userData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData()
    });
  }

  deleteUser(user_id: any) {
    this.http.delete(`${this.service.url}delete_user/${user_id}`).subscribe((response: any) => {
      this.http.delete(`${this.service.url}deleteByUSerId/${user_id}`).subscribe()
      this.getData()
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}

