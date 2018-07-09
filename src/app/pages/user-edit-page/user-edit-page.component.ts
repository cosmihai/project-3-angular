
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

import { User } from '../../interfaces/User';


@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {

  user: User = {
    _id: '',
    username: '',
    password: '',
    pictureUrl: '',
    firstName: '',
    lastName: ''
  };
  idUser: string = '';
  currentUser: User;
  processing: boolean;
  feedbackEnabled: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.userService.getOne(this.idUser)
        .then((data) => {
          this.user = data
          this.currentUser = this.authService.getUser();
          if(this.currentUser._id!==this.user._id) {
            this.router.navigate([`/`])
          };
        })
    });
  }

  submitForm() {
    this.userService.edit(this.user)
      .then((data) => {
        this.user = data;
        this.router.navigate(['/users', this.user._id]);
      })
  }

}
