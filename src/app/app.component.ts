import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchData: string;

  getSearchData(data: string) {
    this.searchData = data;
  }
}
