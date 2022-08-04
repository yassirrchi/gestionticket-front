import { Injectable } from '@angular/core';
 import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http:HttpClient) { }

  uploadFile(file:FormData){
     
    return this.http.post<any>("http://localhost:4443/file",file,{reportProgress:true,observe:"events"})
  }
  downloadFile(ticketId:number):Observable<HttpEvent<Blob>>{
    return this.http.get("http://localhost:4443/file/"+ticketId,{reportProgress:true,observe:'events',responseType:'blob'})
  }

}
