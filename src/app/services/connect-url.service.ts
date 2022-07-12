import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Publication } from '../models/Publication'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectUrlService {

  //API_URL = 'http://localhost:3000/api';
  API_URL = 'https://backend-despliegue.herokuapp.com/api';

  constructor(private http: HttpClient ) { 
  }
  
      
  getPublications(){
    return this.http.get(`${this.API_URL}/publication`);
  }

  getPublication(id: string){
    return this.http.get(`${this.API_URL}/publication/${id}`);
  }

  savePublication(publication: Publication){
    return this.http.post(`${this.API_URL}/publication`, publication);
  }

  updatePublication(id: string|number|undefined, updatedPublication: Publication): Observable<Publication>{
    return this.http.put(`${this.API_URL}/publication/${id}`, updatedPublication);
  }

  deletePublication(id: string){
    return this.http.delete(`${this.API_URL}/publication/${id}`);
  }

  getUsers(){
    return this.http.get(`${this.API_URL}/login`);
  }


}
