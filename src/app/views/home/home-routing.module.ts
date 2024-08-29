import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
]

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }