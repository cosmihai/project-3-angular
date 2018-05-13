import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.css']
})
export class CocktailItemComponent implements OnInit {

  @Input() cocktail: Object;

  constructor() { }

  ngOnInit() {
  }

}
