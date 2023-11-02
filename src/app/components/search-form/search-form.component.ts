import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../../services";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;
  searchData: string;

  @Output()
  outputSearchData = new EventEmitter()

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
    this.searchData =  this.form.value.search
    // this.searchService.getSearchRepositories(searchText).subscribe(value =>
      console.log(this.searchData)
    this.form.reset();
  }

  lift(): void {
    this.outputSearchData.emit(this.searchData)
  }
}
