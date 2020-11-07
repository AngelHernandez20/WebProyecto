import { TestBed } from '@angular/core/testing';

import { ConexionAlumnosService } from './conexion-alumnos.service';

describe('ConexionAlumnosService', () => {
  let service: ConexionAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
