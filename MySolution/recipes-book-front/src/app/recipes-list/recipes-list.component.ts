import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {RecipesService} from '../core/services/recipes.service';
import {Recipe} from "../core/model/recipe.model";
import {BehaviorSubject, combineLatest, map, Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent implements OnInit {

  recipes$ = this.recipesService.recipes$
  filterRecipesAction$ = this.recipesService.filterRecipesAction$;

  filteredRecipes$ = combineLatest([this.recipes$, this.filterRecipesAction$]).pipe(
    map((resultAsArray: [Recipe[], Recipe]) => {
      return resultAsArray[0].filter(recipe =>
        recipe.title?.toLowerCase()
          .indexOf(resultAsArray[1]?.title?.toLowerCase() ?? '') != -1)

    })
  );

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {

  }


  onRating(event: any, recipe: Recipe) {
    console.log(event.value)
  }

  onCancelRating(recipe: Recipe) {
    console.log(recipe)
  }

  editRecipe(recipe: Recipe) {
    console.log(recipe)
  }

}
