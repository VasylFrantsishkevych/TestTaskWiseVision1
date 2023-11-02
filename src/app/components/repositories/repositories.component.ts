import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../../services";


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  @Input()
  searchData: string;

  constructor(private searchService:SearchService) {
    console.log(this.searchData);
  }

  ngOnInit(): void {
    this.searchService.getSearchRepositories(this.searchData).subscribe(value => console.log(value))
  }
}
