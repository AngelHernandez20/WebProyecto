import { Injectable } from '@angular/core';
import { Alumno } from '../app/Model/Alumno';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionAlumnosService {

  constructor(private http: HttpClient) { }
  private API = 'http://127.0.0.1:8000/api/v1/alumnos/';

  getAllAlumns(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.API);
  }

  addNuevoAlumno(alumno:Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.API,alumno);
  }

  actAlumno(alumno:Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(this.API,alumno);
  }

}
