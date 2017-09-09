import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'estudiante-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

	 @Input()
    estudiante: Student;

}
