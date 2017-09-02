import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Teacher} from "../models/teacher";

export class InMemoryTeacherService implements InMemoryDbService {
  createDb() {
    let profesores: Array<Teacher> = [
      {
        id: 1,
        name: "Alejandro",
        lastname: "Romero",
        profession: "Ingeniero de Sistemas",
        group: 6,
        grade: 1,
      },
      {
        id: 2,
        name: "Elmer",
        lastname: "Escudero",
        profession: "Licenciado en Matematicas",
        group: 8,
        grade: 2,
      },
      {
        id: 3,
        name: "Oscar",
        lastname: "Lopez",
        profession: "Licenciado en Ciencias Naturales",
        group: 7,
        grade: 1,
      }
    ];

    return {profesores};
  }

}