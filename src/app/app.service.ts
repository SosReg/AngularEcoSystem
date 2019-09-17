import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
 
import 'rxjs/add/operator/map';
 
import 'rxjs/add/operator/catch';
 
import { Observable } from 'rxjs/Observable';
 

 
@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }
 
getProfiles(input:number): Observable<any> {
  try {
    return this.http.get('https://randomuser.me/api/?results='+input) .map(res=>res) ;
  }catch (error) { 
    console.log(error);
  }  
}

}
