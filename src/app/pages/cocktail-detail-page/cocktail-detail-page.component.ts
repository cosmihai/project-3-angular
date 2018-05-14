import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cocktail-detail-page',
  templateUrl: './cocktail-detail-page.component.html',
  styleUrls: ['./cocktail-detail-page.component.css']
})
export class CocktailDetailPageComponent implements OnInit {
  cocktail: any = {};
  idCocktail: String;
  owner: boolean;
  currentUser: any;


  constructor(
    private cocktailService: CocktailService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.owner = false;
    this.currentUser = this.authService.getUser();
    this.activateRoute.params.subscribe((params) => {
      this.idCocktail = params.id;
      this.cocktailService.getOne(this.idCocktail)
      .then((data) => {
        this.cocktail = data
        if (this.currentUser._id === this.cocktail.owner) {
          this.owner = true;
        }
      })
    })
  }

  onClickDelete(id) {
    this.cocktailService.deleteOne(id)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
