import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AlbumListComponent,
  },
  {
    path: ':id',
    component: AlbumDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbunsRoutingModule {}
