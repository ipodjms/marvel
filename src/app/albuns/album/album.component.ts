import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../shared/album';
import { Character } from 'src/app/characters/shared/character';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public navigateToDetail(album: Album): void {
    this.router.navigate([ album.id], {
      replaceUrl: false,
      relativeTo: this.activatedRoute
    });
  }

}

