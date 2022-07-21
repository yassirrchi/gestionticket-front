import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technicien } from '../model/Technicien.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TechnicienService {

  constructor(private http:HttpClient ) { }
  public getAllTechniciens():Observable<Technicien[]>{
    return this.http.get<Technicien[]>("http://localhost:4443/techniciens");

  }
}
