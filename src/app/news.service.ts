import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {
currentArt:any;
  constructor( private http:HttpClient) { }
  getData(url1){
    return this.http.get(`${API_URL}/${url1}&apikey=${API_KEY}`);
  }
}
