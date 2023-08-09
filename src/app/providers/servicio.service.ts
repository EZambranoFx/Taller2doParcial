import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private URL: string='https://dawm-fiec-espol-default-rtdb.firebaseio.com/news.json';
  constructor(private http:HttpClient) { }
  getResponse(){
    return this.http.get(this.URL);
  }
}
