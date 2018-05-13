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


  constructor(
    private cocktailService: CocktailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cocktailService.listAll()
      .then((data) => {
        this.cocktails = data;
      });

  }

}
