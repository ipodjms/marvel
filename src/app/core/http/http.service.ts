import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';
import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService<T> {

  public httpClient: HttpClient;

  constructor(private injector: Injector,  @Inject('url') public url: string, @Inject('endpoint') protected endpoint: string ) {
    this.httpClient = injector.get(HttpClient);
  }


  public create(item: T): Observable<T> {
    return this.httpClient.post<T>(`${this.url}/${this.endpoint}`, item).pipe(map((data) => data as T));
  }

  public update(item: T): Observable<T> {
    return this.httpClient.put<T>(`${this.url}/${this.endpoint}`, item).pipe(map((data) => data as T));
  }

  public delete(item: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.url}/${this.endpoint}/${item}`).pipe(map((data) => data));
  }

  public get(id: string): Observable<T> {
    console.log (this.endpoint);
    console.log (id);
    return this.httpClient.get<T>(`${this.url}/${this.endpoint}/${id}?apikey=${environment.API_KEY}`).pipe(map((data) => data as T));
  }

  public getEventDetail(id: string): Observable<T> {
    return this.httpClient.get<T>(`${this.url}/${this.endpoint}/${id}/events?apikey=${environment.API_KEY}`).pipe(map((data) => data as T));
  }

  public getAll(offset: string): Observable<T> {
   // tslint:disable-next-line:max-line-length
   return this.httpClient.get<T>(`${this.url}/${this.endpoint}?limit=20&offset=${offset}&apikey=${environment.API_KEY}`).pipe(map((data) => data as T));
  }

  public getAllWithParams(params: string, offset: string): Observable<T> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<T>(`${this.url}/${this.endpoint}?${params}offset=${offset}&apikey=${environment.API_KEY}`).pipe(map((data) => data as T));
   }


}
