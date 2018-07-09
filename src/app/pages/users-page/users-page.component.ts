import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { User } from '../../interfaces/User';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users: Array<User>;


  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.listAll()
      .then((data) => {
        this.users = data;
      });
  }

}
