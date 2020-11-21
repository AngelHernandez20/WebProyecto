
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { LandingPageComponent } from './landing-page.component';
import {ConexionAlumnosService} from '../conexion-alumnos.service';
import { Alumno } from '../Model/Alumno';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
