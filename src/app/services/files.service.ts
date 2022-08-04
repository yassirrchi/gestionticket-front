import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http:HttpClient) { }

  uploadFile(file:FormData){
     
    return this.http.post<any>("http://localhost:4443/file",file)
  }

}
