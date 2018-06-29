import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktails-list-page',
  templateUrl: './cocktails-list-page.component.html',
  styleUrls: ['./cocktails-list-page.component.css']
})
export class CocktailsListPageComponent implements OnInit {

  cocktails: Array<any>;
  ingredient: String;
  selectivCocktails = [];
  selectivList : boolean;


  constructor(
    private cocktailService: CocktailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectivList = false;
    this.ingredient = null;
    this.cocktailService.listAll()
      .then((data) => {
        this.cocktails = data;
      });
  }

  onClick(ingr) {
    if (ingr==='all') {
      this.selectivList = false;
    }else{
      this.selectivCocktails =  [];
      for(let i=0; i<this.cocktails.length; i++){
        var cocktail = this.cocktails[i];
        for(let j=0; j<cocktail.ingredients.length; j++){
          var actualIngredient = cocktail.ingredients[j].ingredient;
          if (actualIngredient===ingr){
            this.selectivCocktails.push(cocktail);
          }
        }
      }
      this.selectivList = true;
    }
  }

}
