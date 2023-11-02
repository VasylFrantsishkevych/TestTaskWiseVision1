import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchRepositoriesComponent } from './components/search-repositories/search-repositories.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RepositoryComponent } from './components/repository/repository.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchRepositoriesComponent,
    RepositoryComponent,
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
