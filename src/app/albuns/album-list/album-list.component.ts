import { Component, OnInit, Injector } from '@angular/core';
import { ListBaseComponent } from 'src/app/core/list-base';
import { Album } from '../shared/album';
import { AlbumService } from '../shared/album.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent extends ListBaseComponent<Album, AlbumService> implements OnInit {
  constructor(injector: Injector, service: AlbumService, private router: Router, private activatedRoute: ActivatedRoute) {
    super(injector, service);
  }

  ngOnInit() {
    super.ngOnInit();
   }

}
