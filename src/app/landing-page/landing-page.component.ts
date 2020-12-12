import { ConexionAlumnosService } from './../conexion-alumnos.service';
import { ServiceService } from './../service.service';
import { AppRoutingModule } from './../app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { Alumno } from './../Model/Alumno';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  llenado = {
    id:null,
    name:'',
    age:null ,  
    email:'',
  }
  SelectedAlumno: Alumno;
  
  alumns : Alumno[];

  constructor(private listServ : ConexionAlumnosService, private router: Router, private service: ServiceService) {}


  ngOnInit(): void {
    this.listServ.getAllAlumns().subscribe( data => (this.alumns=data));
    
  }

  render(): void {
    this.listServ.getAllAlumns().subscribe( data => (this.alumns=data));
  }

  agregarAlum(){
    this.listServ.addNuevoAlumno(this.llenado).subscribe(data => console.log(data));
    this.llenado ={
      id: null,
      name: '',
      age: " ",
      email: '',
    };
    console.log(this.llenado)
     alert("Alumno Agregado")
      window.location.reload();    
  }
// -------------------------------------------------------------
  delete(alumns:Alumno):void{
    console.log(alumns);
     this.listServ.deleteAlumno(alumns)
     .subscribe(data=>{
      //  this.alumns=this.alumns.filter(a=>a!==alumns);
      
        window.location.reload(); 
     })
  }

  // --------------------------------------------------------------------
  
  cargarDatos(alumns:Alumno):void{
    this.listServ.selectedAlumno = Object.assign({},alumns);    
   }
}
  