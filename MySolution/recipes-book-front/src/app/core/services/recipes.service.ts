import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../model/recipe.model';
import {environment} from 'src/environments/environment';
import {BehaviorSubject, catchError, of} from "rxjs";

const BASE_PATH = environment.basePath

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`).pipe(
    catchError(() => of([]))
  );

  private filterRecipeSubject = new BehaviorSubject<Recipe>({title: ''})
  filterRecipesAction$ = this.filterRecipeSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  updateFilter(criteria: Recipe) {
    this.filterRecipeSubject.next(criteria);
  }
}
