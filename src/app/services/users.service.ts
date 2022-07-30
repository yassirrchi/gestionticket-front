import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  public getAllTechniciens():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:4443/techniciens");
  }
  public getAllAdmins():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:4443/admins");
  }
  public getAllClients():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:4443/clients");
  }
   
   
    
  public deleteUser(id:string,role:string):Observable<any[]>{
    return this.http.delete<any[]>("http://localhost:4443/user/delete/"+id+"/"+role);
  }
  public createUser(username:string,password:string,role:string):Observable<any[]>{
    const data={username,password,role}
  return this.http.post<any[]>("http://localhost:4443/user/create",data);
   }


}
