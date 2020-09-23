import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/characters-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
  },
  {
    path: ':id',
    component: CharacterDetailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
