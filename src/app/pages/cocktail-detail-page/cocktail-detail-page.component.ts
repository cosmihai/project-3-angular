import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CocktailService } from '../../services/cocktail.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

import { Cocktail } from '../../interfaces/Cocktail';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-cocktail-detail-page',
  templateUrl: './cocktail-detail-page.component.html',
  styleUrls: ['./cocktail-detail-page.component.css']
})

export class CocktailDetailPageComponent implements OnInit {
  cocktail: Cocktail = {
    _id: '',
    name: '',
    glass: '',
    category: '',
    ingredients: [],
    garnish: '',
    preparation: '',
    isIBA: false,
    imageUrl: '',
    owner: ''
  }
  idCocktail: String;
  owner: boolean;
  ownerName: String = '';
  currentUser: User = {
    _id: '',
    username: '',
    password: '',
    pictureUrl: '',
    firstName: '',
    lastName: ''
  };


  constructor(
    private cocktailService: CocktailService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.owner = false;
    this.currentUser = this.authService.getUser();
    this.activateRoute.params.subscribe((params) => {
      this.idCocktail = params.id;
      this.cocktailService.getOne(this.idCocktail)
      .then((data) => {
        this.cocktail = data
        if (this.currentUser) {
          if (this.currentUser._id === this.cocktail.owner) {
            this.owner = true;
          }
        }
        this.userService.getOne(this.cocktail.owner)
        .then((result) => {
          this.ownerName = result.username;
        })
      });
    });
  }

  onClickDelete(id) {
    if(confirm("Delete this cocktail???")){

      this.cocktailService.deleteOne(id)
      .then(() => {
        this.router.navigate(['/users', this.currentUser._id]);
      })
      .catch((err) => {
        console.log(err)
      });
    }
  }
}
