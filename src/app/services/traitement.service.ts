import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Traitement } from '../model/Traitement.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {
  

  constructor(private http:HttpClient ) { }
  public getAllTraitements():Observable<Traitement[]>{
    return this.http.get<Traitement[]>("http://localhost:4443/alltraitements");

  }
  public CreateTraitement(ticketId:Number,technicienId:Number){
    let data={ticketId,technicienId}
    console.log(data)
   return this.http.post("http://localhost:4443/traitement/create",data)
  }
  public EditTraitement(state:String,traitementId:Number){
     let data={state,traitementId}
     console.log(data)
     return this.http.put("http://localhost:4443/traitement/edit",data)
  }
  
}
