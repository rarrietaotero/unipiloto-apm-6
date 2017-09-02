import { Injectable } from '@angular/core';
import {ESTUDIANTES} from "../mock/student-mock";

@Injectable()
export class StudentsService {

  getStudents(){
    return Promise.resolve(ESTUDIANTES);
  }

}
