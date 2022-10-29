import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  onIngredientDeleted(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(x => x.name != ingredient.name);
  }
  constructor() { }

  ngOnInit() {
  }

}

