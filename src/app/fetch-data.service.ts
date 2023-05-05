import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAlbum } from './IAlbum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
 private url:string="https://jsonplaceholder.typicode.com/albums"
  constructor(private http:HttpClient) { }
  getTitles():Observable<IAlbum>{
    
    return this.http.get<IAlbum>(this.url)
  }
}
