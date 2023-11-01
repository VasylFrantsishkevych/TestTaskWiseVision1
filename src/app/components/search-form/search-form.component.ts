import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../../services";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;

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

  add(): void {
    const searchText =  this.form.value.search
    this.searchService.getSearchRepositories(searchText).subscribe(value =>
      console.log(value.items))
  }
}
