import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/Client.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  clientLogin(username:String,password:String):Observable<any>{
    const data={username,password}
    return this.http.post<any>("http://localhost:4443/client/login",data)

  }
  AdminLogin(username:String,password:String):Observable<any>{
    const data={username,password}
    return this.http.post<any>("http://localhost:4443/admin/login",data)

  }


}
