import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShortenApiService {

  shortenBaseUrl = 'https://api.shrtco.de/v2/';

  constructor(private http: HttpClient) { }

  encurtar() {
    return this.http.get<any[]>(`${this.shortenBaseUrl}`);
  }
}
