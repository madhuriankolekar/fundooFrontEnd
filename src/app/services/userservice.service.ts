import { Injectable } from '@angular/core';
import {HttpClientModule, HttpHeaders, HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private API_URL=environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) {
    
  }

  registration(user: any):Observable<any>{
    console.log(user);
    return this.http.post<any>(this.API_URL + 'user/registration',user, this.httpOptions);
  }
}