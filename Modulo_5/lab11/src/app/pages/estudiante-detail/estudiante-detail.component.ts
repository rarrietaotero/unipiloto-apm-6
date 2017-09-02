import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css']
})


export class EstudianteDetailComponent {
  @Input()
  estudiante: Student;
}
