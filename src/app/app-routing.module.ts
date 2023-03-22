import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {  path: '', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'lists/:id', component: ListsComponent },
  { path: '**', component: NotFoundComponent, data: { title: 'Oops' } }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
