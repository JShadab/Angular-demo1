import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from './user-data';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  userdataArr = [];


  isAuthenticate(data:any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };


    let url = "http://192.168.0.49:5005/getUserdata";


    return this._http.post<UserData[]>(url, data, httpOptions).pipe(

      map(userdataArr => {
        return userdataArr;
      },
        catchError((error: any) => observableThrowError('Server error'))));

  }
}
