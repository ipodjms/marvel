import { CharacterService } from '../shared/character.service';
import { Component, OnInit, Injector } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Character } from '../shared/character';
import { ListBaseComponent } from 'src/app/core/list-base';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})


export class CharacterListComponent extends ListBaseComponent<Character, CharacterService> implements OnInit {
  constructor(injector: Injector, service: CharacterService, private router: Router, private activatedRoute: ActivatedRoute) {
    super(injector, service);
  }

  ngOnInit() {
    super.ngOnInit();
   }

}
