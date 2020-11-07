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

  alumns : Alumno[];
  constructor(private listServ : ConexionAlumnosService) { }

  ngOnInit(): void {
    this.listServ.getAllAlumns().subscribe( data => (this.alumns=data));
  }

  render(): void {
    this.listServ.getAllAlumns().subscribe( data => (this.alumns=data));
  }
}
