import { Component, Input } from '@angular/core';
import { Student } from '../models/estudiante';
import { Teacher } from '../models/profesor';

@Component({
  selector: 'estudiante-detail',
  templateUrl: './detail.component.html'
})

export class StudentDetailComponent {
  @Input()
  estudiante: Student;
}


@Component({
  selector: 'profesor-detail',
  templateUrl: './detail.component.html'
})

export class TeacherDetailComponent {
  @Input()
  profesor: Teacher;
}