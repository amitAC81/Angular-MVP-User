import { Component, OnInit } from '@angular/core';
import { UserListPresenter } from '../user-list-presenter/user-list-presenter';

@Component({
  selector: 'app-user-list-ui',
  templateUrl: './user-list-presentation.html',
  styleUrls: ['./user-list-presentation.scss'],
  providers: [UserListPresenter]
})
export class UserListPresentation implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
