import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
    path: '',
    component: UserComponent
    }
]

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }