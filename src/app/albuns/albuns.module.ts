import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbunsRoutingModule } from './albuns-routing.module';
import { AlbumComponent } from './album/album.component';



@NgModule({
  declarations: [AlbumListComponent, AlbumDetailsComponent, AlbumComponent],
  imports: [
    CommonModule, AlbunsRoutingModule, SharedModule
  ]
})
export class AlbunsModule { }
