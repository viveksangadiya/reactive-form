import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {



  constructor(private http:HttpClient) { }

  URL = 'http://localhost:3000/enroll';

  register(userData:any){
    return this.http.post<any>(this.URL,userData)
  }

}

