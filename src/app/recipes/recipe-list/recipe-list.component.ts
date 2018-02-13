import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simply a test', 'https://get.pxhere.com/photo/heart-pattern-red-circle-brand-font-illustration-design-shape-129402.jpg')
  ];

  check() {
    console.log(this.recipes[0].name)
  }

  constructor() { }

  ngOnInit() {
  }

}
