import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IRepository} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }

  getSearchRepositories(searchText: string, page: number = 1): Observable<IRepository> {
    return  this.httpClient.get<IRepository>(`${urls.search}${searchText}`, {params: {page}})
  }
}
