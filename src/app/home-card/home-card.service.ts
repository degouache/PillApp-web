import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeCardService {

  constructor(private http:HttpClient) { }

  // get patients(){
  //   return this.http.get<FICHA>(`${environment.API_URL}/`, FICHAData);
  // } 

}
