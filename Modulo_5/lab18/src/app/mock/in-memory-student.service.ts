import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Student} from "../models/student";

export class InMemoryStudentService implements InMemoryDbService {
  createDb() {
    let estudiantes: Array<Student> = [
      {
        id: 1,
        name: "Rafael",
        lastname: "Arrieta",
        classes: "Desarrollo Movil",
        grade: 10,
        group: 6
      },
      {
        id: 2,
        name: "Juan",
        lastname: "Perez",
        classes: "Diseño Web",
        grade: 8,
        group: 2
      },
      {
        id: 3,
        name: "Luis",
        lastname: "Marrugo",
        classes: "Ingenieria Civil",
        grade: 12,
        group: 3
      }
    ];

    return {estudiantes};
  }

}
