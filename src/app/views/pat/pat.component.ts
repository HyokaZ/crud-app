import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PatPopupComponent } from './pat-popup/pat-popup.component';
import { service } from 'src/app/service/service';

@Component({
  selector: 'app-pat',
  templateUrl: './pat.component.html',
  styleUrls: ['./pat.component.scss']
})
export class PatComponent {
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private service:service
  ) { }


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: any = new MatTableDataSource();

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.dataSource.data = []
    this.http.get(this.service.url + 'get_all_pat').subscribe((response: any) => {
      if (response.length > 0) {
        this.dataSource = new MatTableDataSource(response)
        this.dataSource.paginator = this.paginator
      } else {
        alert(`DATA NOT FOUND : ${response.length}`)
      }
    })
  }

  openDialog(userData: any) {
    const dialogRef = this.dialog.open(PatPopupComponent, {
      width: '800px',
      disableClose: false,
      data: userData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData()
    });
  }

  deleteUser(user_id: any) {
    this.http.delete(`${this.service.url}delete_pat/${user_id}`).subscribe((response: any) => {
      this.getData()
    })
  }
}
