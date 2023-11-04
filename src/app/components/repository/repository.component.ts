import {Component, Input} from '@angular/core';

import {IItem} from "../../interfaces";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent {

  @Input()
  repository: IItem;
  panelOpenState: boolean = false;

}
