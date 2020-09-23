import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../shared/character';
import { Router, ActivatedRoute } from '@angular/router';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public navigateToDetail(character: Character): void {
    this.router.navigate([ character.id], {
      replaceUrl: false,
      relativeTo: this.activatedRoute
    });
  }

}
