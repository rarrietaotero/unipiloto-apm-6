import { Injectable } from '@angular/core';
import {Student} from "../models/student";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {

  private estudiantesURI = 'http://localhost:3000/api/estudiantes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getStudents(): Promise<Student[]> {
    return this.http.get(this.estudiantesURI)
      .toPromise()
      .then(response => response.json().data as Student[])
      .catch(this.handleError);
  }

  update(estudiante: Student): Promise<Student> {
    const url = `${this.estudiantesURI}/${estudiante.id}`;
    return this.http
      .put(url, JSON.stringify(estudiante), {headers: this.headers})
      .toPromise()
      .then(() => estudiante)
      .catch(this.handleError);
  }

  create(name: string): Promise<Student> {

    return this.http
      .post(this.estudiantesURI, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
