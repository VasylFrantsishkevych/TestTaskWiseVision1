import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../../services";
import {IItem} from "../../interfaces";

@Component({
  selector: 'app-search-repositories',
  templateUrl: './search-repositories.component.html',
  styleUrls: ['./search-repositories.component.css']
})
export class SearchRepositoriesComponent implements OnInit {
  form: FormGroup;
  searchText: string;
  repositories: IItem[];


  constructor(private searchService:SearchService) {
    this.initForm()
  }

  ngOnInit(): void {
  }

  initForm(): void {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required])
    })
  }

  search(): void {
    this.searchText = this.form.value.search;
      this.searchService.getSearchRepositories(this.searchText).subscribe(value => {
      console.log(value);
      this.repositories = value.items;
    });
    this.form.reset();
  }
}
