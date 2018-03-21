import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simply a test', 'https://get.pxhere.com/photo/heart-pattern-red-circle-brand-font-illustration-design-shape-129402.jpg'),
    new Recipe('My Second Recipe', 'This is not a test', 'https://get.pxhere.com/photo/heart-pattern-red-circle-brand-font-illustration-design-shape-129402.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
