import { ConexionAlumnosService } from './../conexion-alumnos.service';
import { Alumno } from './../Model/Alumno';
import { ServiceService } from './../service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // alumns : Alumno;


  constructor(private router:Router,private listServ : ConexionAlumnosService, private service:ServiceService) { }

  ngOnInit(): void {
    // this.Editar(); 
  }

  // Editar(){
  //   console.log("id");
  //   let id=localStorage.getItem("id");
  //    this.listServ.getAlumnoId(+id)
  //    .subscribe(data=>{
  //      this.alumns=data;
  //    })
  }

  // Actualizar(id:number){
  //   this.listServ.updateAlumno(id)
  //   .subscribe(data=>{
  //     this.alumns=data;
  //     alert("Se actualizo correctamente");
  //     this.router.navigate(["home"])
  //   })
  // }


