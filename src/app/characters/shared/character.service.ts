import { Injectable, Injector } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Character } from './character';
import { VERSION_API } from 'src/app/shared/const';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends HttpService<Character> {

  constructor(injector: Injector) {
    super(injector, VERSION_API, 'characters');
  }
}
