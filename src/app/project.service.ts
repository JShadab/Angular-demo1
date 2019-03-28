import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from './user-data';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects = [];

  constructor(private _http: HttpClient) { }

  create(project: Project) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };


    let url = "http://192.168.0.49:5005/getUserdata";


    return this._http.post<UserData[]>(url, project, httpOptions).pipe(

      map(userdataArr => {
        return userdataArr;
      },
        catchError((error: any) => observableThrowError('Server error'))));
  }

  update() { }

  delete() { }

  get(name: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };

    let url = "http://192.168.0.49:5005/getAllProjectdata";

    return this._http.get(url, httpOptions).pipe(

      map(projectArr => {
        return projectArr;
      },
        catchError((error: any) => observableThrowError('Server error'))));
  }

  getAll() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };

    let url = "http://192.168.0.49:5005/getAllProjectdata";

    return this._http.get(url);

  }

  getAllProjectRecords(projectName: string) {
   
  }
}
