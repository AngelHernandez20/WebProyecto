import { ConexionAlumnosService } from './../conexion-alumnos.service';
import { ServiceService } from './../service.service';
import { AppRoutingModule } from './../app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { Alumno } from './../Model/Alumno';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';






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
  constructor(private listServ : ConexionAlumnosService, private router: Router, private service: ServiceService) { }


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
    alert("Alumno Agregado")
    window.location.reload();    
  }

// ------------------------------------------------------------
  Editar(alumns:Alumno){
    localStorage.setItem("id",alumns.id.toString());
    this.router.navigate(["edit"]);
  }

  actualizarAlum(){
    const newAlum = { name: ' ', age:0 ,email: ' '};
    this.listServ.actAlumno(newAlum).subscribe(alumns => console.log(this.alumns));
  }

  // ----------------------------------------------------------------

  // delete(id:number):void{
  //   const myAlumno = {id:18}
  //   this.listServ.deleteAlumno(myAlumno.id).subscribe();
  //   window.location.reload();  
  // }

   delete(alumns:Alumno):void{
     this.listServ.deleteAlumno(alumns)
     .subscribe(data=>{
       this.alumns=this.alumns.filter(a=>a!==alumns);
       window.location.reload(); 
     })
  }
  // delete(id:number)
  // {
  //   console.log(id);

  // }
}
