import { LandingPageComponent } from './../landing-page/landing-page.component';
import { Component, OnInit, NgModule } from '@angular/core';
import{ NgForm } from '@angular/forms';
import{ Location } from '@angular/common';
import { ConexionAlumnosService } from './../conexion-alumnos.service';
import { ServiceService } from './../service.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  constructor(
    public listServ : ConexionAlumnosService,
    private service: ServiceService,
    private location: Location  
  ) { }

  ngOnInit(): void {
  }

  onSaveBook(bookForm: NgForm):void{
    console.log('UPDATE Alumno');
    this.listServ.updateAlumno(bookForm.value).subscribe(book => location.reload());
  }

}
