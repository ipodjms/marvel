import { AlbumService } from './../shared/album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../shared/album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  public album: Album;

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    const albumId = this.getUrlsParams();
    if (!!albumId) {
      this.albumService.get(albumId).subscribe(album => {
        console.log (album);
        this.album = album;
      });
    }
  }

  getUrlsParams() {
    return this.activatedRoute.snapshot.params.id;
  }
}
