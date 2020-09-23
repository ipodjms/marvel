import { Injectable, Injector } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Album } from './album';
import { VERSION_API } from 'src/app/shared/const';

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends HttpService<Album> {
  constructor(injector: Injector) {
    super(injector, VERSION_API, 'albums');
  }
}
