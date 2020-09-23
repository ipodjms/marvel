import { CharactersRoutingModule } from './characters-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/characters-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterComponent } from './character/character.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CharacterListComponent, CharacterDetailComponent, CharacterComponent],
  imports: [
    CommonModule, CharactersRoutingModule, SharedModule, FormsModule
  ]
})
export class CharactersModule { }
