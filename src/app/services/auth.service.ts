import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/Client.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  UserLogin(username:String,password:String,role:String):Observable<any>{
    const data={username,password,role}
    return this.http.post<any>("http://localhost:4443/user/login",data)

  }


}
