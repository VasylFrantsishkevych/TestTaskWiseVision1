import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {SearchService} from "../../services";
import {IItem} from "../../interfaces";
import {ActivatedRoute, Router, RouterStateSnapshot} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-search-repositories',
  templateUrl: './search-repositories.component.html',
  styleUrls: ['./search-repositories.component.css']
})
export class SearchRepositoriesComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  searchText: string;
  // page: number;
  totalCount: number;
  repositories: IItem[];

  @ViewChild(MatPaginator)
  paginator: MatPaginator


  constructor(private searchService: SearchService, private router:Router) {
    this.initForm()
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe((page) => {
      this.router.navigate([], {queryParams: {page: page.pageIndex+1}})
    })
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
      this.totalCount = value.total_count;
    });
    this.form.reset();
  }


}
