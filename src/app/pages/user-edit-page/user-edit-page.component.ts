
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {

  user: any = {};
  idUser: string;
  currentUser: any = {};

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

}
