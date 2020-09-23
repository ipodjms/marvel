import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
  {
    path: 'characters',
    loadChildren: () =>
      import('./characters/characters.module').then((m) => m.CharactersModule)
  },
  {
    path: 'albuns',
    loadChildren: () =>
      import('./albuns/albuns.module').then((m) => m.AlbunsModule)
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./todos/todos.module').then((m) => m.TodosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
