import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const URL_API = environment.Urlapi;
const KEY_API = environment.Keyapi;
@Injectable({
  providedIn: 'root'
})
export class VideosService {
  result:any;
  constructor(private _http : HttpClient) { }
  getPr(url){
    return this._http.get(`${URL_API}/${url}&apikey=INSERT-${KEY_API}`);

}}
