import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cocktail-edit-page',
  templateUrl: './cocktail-edit-page.component.html',
  styleUrls: ['./cocktail-edit-page.component.css']
})
export class CocktailEditPageComponent implements OnInit {

  cocktail: any = {};
  idCocktail: String = '';
  currentUser: any = {};
  ingredientsArray: Array<any> = [];

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
      })
    })
  }
      ingredientTrackerFunction(index: number, ingredient: any) {
        return ingredient._id;
      }

  submitForm(form) {
    this.cocktailService.edit(this.cocktail)
      .then((data) => {
        this.cocktail = data;
        this.router.navigate(['/cocktails', this.cocktail._id]);
      })
  }

}
