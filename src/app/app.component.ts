import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  url = "http://202.170.122.157:9250/"

  constructor(
    private http: HttpClient
  ) { }

  async ngOnInit() {
  }

}
