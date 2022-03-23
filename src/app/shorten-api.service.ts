import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShortenApiService {

  shortenBaseUrl = 'https://api.shrtco.de/v2/shorten';

  constructor(private http: HttpClient) { }

  encurtar(url: string) {
    return this.http.get<any[]>(`${this.shortenBaseUrl}`, {params: {
      url
    }});
  }
}
