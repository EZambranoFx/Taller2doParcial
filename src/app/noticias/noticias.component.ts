import { Component } from '@angular/core';
import { Noticias } from '../interfaces/noticias';
import { ServicioService } from '../providers/servicio.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
})
export class NoticiasComponent {
  public data: Noticias[]=[];
  constructor(private dataProvider: ServicioService){}
  ngOnInit(){
    this.dataProvider.getResponse().subscribe((response)=>{
      this.data=(response as Noticias[]);
    })
  }
}
