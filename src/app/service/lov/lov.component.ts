import { Component, Inject, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { service } from "../service";

@Component({
    selector: 'app-lov',
    templateUrl: './lov.component.html'
})
export class LovComponent{
    constructor(
        public dialogRef: MatDialogRef<LovComponent>,
        @Inject(MAT_DIALOG_DATA) public data:any,
        private http: HttpClient,
        private service: service
    ){}
    @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator | undefined
    displayedColumns: string[] = ['code', 'name']
    dataSource: any = new MatTableDataSource()

    ngOnInit() {
          this.getData()
    }

    getData(){
        this.http.get(`${this.service.url}${this.data.service}`).subscribe((response: any) => {
            if(response.length> 0){
                response.forEach((e: any , i: any) => {
                    this.dataSource.data.push({
                        id: e[0],
                        code: e[1],
                        name: e[2]
                    })
                    if(response.length === i +1){
                        this.dataSource.data = [...this.dataSource.data]
                        //this.dataSource.data = new MatTableDataSource(this.dataSource)
                        this.dataSource.paginator = this.paginator
                        console.log(this.dataSource.data)
                    }
                });
            }else{
                alert("Data Not Found")
            }
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