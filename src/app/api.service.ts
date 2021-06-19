
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'; 


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serviceUrl = 'http://localhost:40000/api/';
  constructor(private http:HttpClient) { }

    
    public getFromApi() {
  
      return this.http.get(this.serviceUrl + 'GetData/');
  
    }

   
    public postToAPi(data) {

      return this.http.post(this.serviceUrl + 'PostData/', data);
  
    }
  


}
