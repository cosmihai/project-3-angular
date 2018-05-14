import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktails-create-page',
  templateUrl: './cocktails-create-page.component.html',
  styleUrls: ['./cocktails-create-page.component.css']
})
export class CocktailsCreatePageComponent implements OnInit {

  cocktail: any;
  currentUser: any ;
  cocktailIngredient: Object;
  ingridientsArray: Array<any>;

  constructor(
    private cocktailService: CocktailService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.cocktail = {};
    this.cocktailIngredient = {};
    this.ingridientsArray = [];
  }
  addIngredient(unit, amount, ingredient, label) {
    ingredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
    this.cocktailIngredient = {
      unit,
      amount,
      ingredient,
      label
    };
    this.ingridientsArray.push(this.cocktailIngredient);
    this.cocktailIngredient = {}
  }

  submitForm(form) {
    this.cocktail = {
      name: this.cocktail.name,
      glass: this.cocktail.glass,
      category: this.cocktail.category,
      imageUrl: this.cocktail.imageUrl,
      garnish: this.cocktail.garnish,
      preparation: this.cocktail.preparation,
      ingredients: this.ingridientsArray,
      owner: this.currentUser._id
    }

    this.cocktailService.createOne(this.cocktail)
      .then((result) => {
        this.router.navigate([`/users/${this.currentUser._id}`]);
      })
    console.log(this.cocktail)
    this.cocktail = {}
  }

}
