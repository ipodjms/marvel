import { CharacterService } from '../shared/character.service';
import { Component, OnInit, Injector } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Character } from '../shared/character';
import { ListBaseComponent } from 'src/app/core/list-base';
import { Router, ActivatedRoute } from '@angular/router';
import { publicDecrypt } from 'crypto';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})


export class CharacterListComponent extends ListBaseComponent<Character, CharacterService> implements OnInit {

public params = '';
public allParams: {key: string, value: string}[] = [];
public searchText = '';
public selected = '';

public autoSearch = new Subject<string>();

  constructor(injector: Injector, service: CharacterService, private router: Router, private activatedRoute: ActivatedRoute) {
    super(injector, service);
    this.autoSearch.pipe(debounceTime(800), distinctUntilChanged()).subscribe((value) => {
      if (!!value && value !== '') {
        this.addParams('name', value);
      } else {
        this.loadList();
      }
    });
  }

  ngOnInit() {
    super.ngOnInit();
   }

   public addParams(k: string, v: string): void {
    this.allParams = [];
    this.allParams.push({key: k, value: v});
    this.search();
   }

   public search(): void {
    this.selected = null;
    this.params = '';
    this.allParams.map(param => {
      this.params = this.params += param.key + '=' + param.value + '&';
    });
    this.service.getAllWithParams(this.params).subscribe(result => {
      console.log(result);
      this.models = result;
    });
   }

   public orderBy(event): void {
     this.searchText = '';
     this.addParams('orderBy', event);
   }

}
