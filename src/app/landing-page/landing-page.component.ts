import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {ConexionAlumnosService} from '../conexion-alumnos.service';
import { Alumno } from '../Model/Alumno';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  llenado = {
    id:null,
    name:'' ,
    age:null ,  
    email:'',
  }

  alumns : Alumno[];
  constructor(private listServ : ConexionAlumnosService) { }


  ngOnInit(): void {
    this.listServ.getAllAlumns().subscribe( data => (this.alumns=data));
  }

  render(): void {
    this.listServ.getAllAlumns().subscribe( data => (this.alumns=data));
  }

  agregarAlum(){
    this.listServ.addNuevoAlumno(this.llenado).subscribe(data => console.log(data));
    this.llenado = {
      id: null,
      name: '',
      age: 0,
      email: '',
    };
    window.location.reload();    
  }

  actualizarAlum(){
    const newAlum = { name: ' ', age:34 ,email: ' '};
    this.listServ.actAlumno(newAlum).subscribe(alumns => console.log(this.alumns));
  }
}
