import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef} from "@angular/material/dialog";
import { Observable } from "rxjs";
import { LovComponent} from "./lov.component";

@Injectable({
    providedIn: 'root'
})
export class LovService{

    constructor(
        private dialog: MatDialog
    ){}

    public popup(service: string): Observable<boolean> {
        let dialogRef: MatDialogRef<LovComponent>
        dialogRef = this.dialog.open(LovComponent,{
            width: '500px',
            height: 'auto',
            disableClose: true,
            data: {service: service}
        })
        return dialogRef.afterClosed()
    }
}