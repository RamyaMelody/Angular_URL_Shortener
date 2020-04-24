import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortService {

  constructor(private http: HttpClient) { }

  postUrl(data): Observable<any> {
    return this.http.post(`https://node-url-app.herokuapp.com/create`, data)
  }
  getURL(): Observable<any> {
    return this.http.get(`https://node-url-app.herokuapp.com/view`)

  }
  getlongURL(data): Observable<any> {
    return this.http.get(`https://node-url-app.herokuapp.com/geturl/` + data)
  }



}
