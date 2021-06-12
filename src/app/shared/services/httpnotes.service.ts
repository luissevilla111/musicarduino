import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Songcard } from '../models/songcard.model';

@Injectable({
  providedIn: 'root'
})
export class HttpnotesService {

  constructor(private http: HttpClient) { }
  songs:Songcard[] = [];
  endpoint = `https://musicarduino-default-rtdb.firebaseio.com/.json`;



  public getHttpSongs(){
    return this.http.get<Songcard[]>(`${this.endpoint}`)
  }
  public getSongs(){
    return [...this.songs];
  }
  public setSongs(sng:Songcard[]){
    this.songs = sng;
  }
  public getSong(index:number){
    return this.songs[index]
  }

  public updateKeys(arr:string[]){
    for (let index = 0; index < arr.length; index++) {
      this.songs[index].id = arr[index];
    }
  }

}
