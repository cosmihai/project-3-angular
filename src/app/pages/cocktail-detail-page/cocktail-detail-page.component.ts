import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-detail-page',
  templateUrl: './cocktail-detail-page.component.html',
  styleUrls: ['./cocktail-detail-page.component.css']
})
export class CocktailDetailPageComponent implements OnInit {
  cocktail: Object = {};
  idCocktail: String;


  constructor(
    private cocktailService: CocktailService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idCocktail = params.id;
      this.cocktailService.getOne(this.idCocktail)
      .then((data) => {
        this.cocktail = data
      })

    })
  }

}
