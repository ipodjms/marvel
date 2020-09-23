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

public autoSearch = new Subject<string>();

  constructor(injector: Injector, service: CharacterService, private router: Router, private activatedRoute: ActivatedRoute) {
    super(injector, service);
    this.autoSearch.pipe(debounceTime(800), distinctUntilChanged()).subscribe((value) => {
      // this.saveSubject();
      alert('faca a busca');
      this.addParams('name', value);
    });
  }

  ngOnInit() {
    super.ngOnInit();
    // this.addParams(null, null);
   }

   public addParams(k: string, v: string): void {
    this.allParams = [];
    this.allParams.push({key: k, value: v});
    //this.allParams.push({key: 'name', value: 'Aaron Stack'});
    // this.allParams.push({key: 'orderBy', value: 'name'});
    this.search(null);
   }

   public search(params: string): void {
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
     console.log (event);
    this.addParams('orderBy', event);
   }

}
