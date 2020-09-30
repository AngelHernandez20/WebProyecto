import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
database=[];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getDatabase("/database").subscribe((data:any[])=>{
      console.log(data);
      this.database=data;
    });
  }
}
