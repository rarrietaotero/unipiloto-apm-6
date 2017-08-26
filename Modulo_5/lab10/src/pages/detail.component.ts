import { Component, Input } from '@angular/core';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';
import { Driver } from '../models/driver';
import { Vehicles } from '../models/vehicle';

@Component({
  selector: 'profesor-detail',
  templateUrl: './detail.component.html'
})

export class TeacherDetailComponent {
  @Input()
  profesor: Teacher;
}

@Component({
  selector: 'estudiante-detail',
  templateUrl: './detail.component.html'
})

export class StudentDetailComponent {
  @Input()
  estudiante: Student;
}

@Component({
  selector: 'conductor-detail',
  templateUrl: './detail.component.html'
})

export class DriverDetailComponent {
  @Input()
  conductor: Driver;
}

@Component({
  selector: 'vehiculo-detail',
  templateUrl: './detail.component.html'
})

export class VehicleDetailComponent {
  @Input()
  vehiculo: Vehicles;
}