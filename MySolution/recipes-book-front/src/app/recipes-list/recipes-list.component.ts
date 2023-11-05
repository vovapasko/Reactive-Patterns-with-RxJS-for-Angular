import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { RecipesService } from '../core/services/recipes.service';
import {Recipe} from "../core/model/recipe.model";
import {Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent implements OnInit {

  recipes$ = this.recipesService.recipes$

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {

  }

}
