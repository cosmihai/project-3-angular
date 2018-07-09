import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CocktailService } from '../../services/cocktail.service';
import { AuthService } from '../../services/auth.service';

import { Cocktail } from '../../interfaces/Cocktail';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-cocktail-edit-page',
  templateUrl: './cocktail-edit-page.component.html',
  styleUrls: ['./cocktail-edit-page.component.css']
})

export class CocktailEditPageComponent implements OnInit {

  cocktail: Cocktail;
  idCocktail: String = '';
  currentUser: User;
  ingredientsArray: Array<any> = [];
  cocktailIngredient: any = {};
  initialNrOfIngr: number;
  deletedIngredients: number = 0;


  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private cocktailService: CocktailService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.activateRoute.params.subscribe((params) => {
      this.idCocktail = params.id;
      this.cocktailService.getOne(this.idCocktail)
      .then((data) => {
        this.cocktail = data;
        if (this.currentUser._id !== this.cocktail.owner) {
          this.router.navigate([`/`])
        };
        this.ingredientsArray = this.cocktail.ingredients;
        this.initialNrOfIngr = this.ingredientsArray.length;
      })
    })
  }

  addIngredient(unit, amount, ingredient, label) {
    ingredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
    this.cocktailIngredient = {
      unit,
      amount,
      ingredient,
      label
    };
    this.ingredientsArray.push(this.cocktailIngredient);
    this.cocktailIngredient = {}
  }

  onDeleteIngredient(index) {
    this.ingredientsArray.splice(index, 1);
    this.deletedIngredients++;
  }


  submitForm() {
    this.cocktailService.edit(this.cocktail)
      .then((data) => {
        this.cocktail = data;
        this.router.navigate(['/cocktails', this.cocktail._id]);
      })
  }

}
