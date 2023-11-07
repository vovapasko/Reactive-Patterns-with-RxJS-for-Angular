import {Component} from '@angular/core';
import {RecipesService} from "../core/services/recipes.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-recipes-filter',
  templateUrl: './recipes-filter.component.html',
  styleUrls: ['./recipes-filter.component.scss']
})
export class RecipesFilterComponent {

  recipeForm = this.fb.group({
    title: [''],
    category: [''],
    ingredient: [''],
    tags: [''],
    prepTime: [''],
    cookingTime: [''],
  });


  constructor(private recipesService: RecipesService,
              private fb: FormBuilder) { }

  filterResults() {
    this.recipesService.updateFilter(this.recipeForm.value);
  }

  clearFilter() {

  }
}
