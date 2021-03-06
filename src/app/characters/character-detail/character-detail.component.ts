import { TokenService } from './../../core/shared/token.service';
import { CharacterService } from './../shared/character.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/character';
import { Observable } from 'rxjs';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  public character: Character;
  public events: Hero[];

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService, private tokenservice: TokenService) { }

  ngOnInit() {
    const characterId = this.getUrlsParams();
    if (!!characterId) {
      this.characterService.get(characterId).subscribe(character => {
        console.log (character);
        this.character = character;
        this.getEventDetail(characterId);
      });
    }
  }

  getUrlsParams(): string {
    return this.activatedRoute.snapshot.params.id;
  }

  getEventDetail(id: string): void {
    this.characterService.getEventDetail(id).subscribe(event => {
      console.log(event);
      this.events = event.data.results;
    });
  }

}
