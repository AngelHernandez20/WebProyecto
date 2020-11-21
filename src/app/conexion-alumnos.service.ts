import { Alumno } from './Model/Alumno';
import { Injectable } from '@angular/core';
// import { Alumno } from '../app/Model/Alumno';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionAlumnosService {

  

  constructor(private http: HttpClient) { }
  private API = 'http://127.0.0.1:8000/api/v1/alumnos/';
  

  // Mostrar datos
  getAllAlumns(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.API);
  }
  
  // Agregar Alumnos
  addNuevoAlumno(alumno:Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.API,alumno);
  }

  getAlumnosId(id:number){
    return this.http.get<Alumno>(this.API+""+id);
   }

  actAlumno(alumno:Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(this.API,alumno);
  }
  
  // deleteAlumno(id:number):Observable<{}> {
  //   this.API = `${this.API}detail/${id}`;
  //   return this.http.delete(this.API);
  // }  

  deleteAlumno(id): Observable<{}>{
     this.API = `http://127.0.0.1:8000/api/v1/detail/alumnos/${id}/`;
    //this.API = `http://127.0.0.1:8000/api/v1/detail/alumnos/12/`;
    return this.http.delete(this.API);
  }
  // ``
}
