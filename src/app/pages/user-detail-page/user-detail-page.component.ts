import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {

  user: any = {};
  idUser: string;
  currentUser: any ={};
  cocktails: any;

  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private cocktailService: CocktailService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.userService.getOne(this.idUser)
        .then((data) => {
          this.user = data
        })
      this.cocktailService.listUserCocktail(this.idUser)
      .then(result => {
        this.cocktails = result;
      })
      this.currentUser=this.authService.getUser();
    });

  }

  onClickEditButton(id){
    this.router.navigate([`users/${id}/edit`])
  }

}
