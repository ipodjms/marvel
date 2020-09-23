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
    return this.httpClient.get<T>(`${this.url}/${this.endpoint}/${id}`).pipe(map((data) => data as T));
  }

  public getAll(): Observable<T[]> {
   return this.httpClient.get<T[]>(`${this.url}/${this.endpoint}?apikey=${environment.API_KEY}`).pipe(map((data) => data as T[]));
  }


}
