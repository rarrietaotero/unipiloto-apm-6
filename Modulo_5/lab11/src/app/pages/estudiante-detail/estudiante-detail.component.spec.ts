import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteDetailComponent } from './estudiante-detail.component';

describe('EstudianteDetailComponent', () => {
  let component: EstudianteDetailComponent;
  let fixture: ComponentFixture<EstudianteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
