import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestoService {
 private url = "http://localhost:3000/restaurant"

  constructor( private http: HttpClient) { }
  getList()
  {
    return this.http.get(this.url)
  }
  saveResto(data:any){
    // console.warn(data);
    return this.http.post(this.url ,data)    
  }
  deleteResto(id: any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id : any): Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }
}