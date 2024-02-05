import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  listaDePersonajes:Personaje[] = [];
  // personaje:Personaje = new Personaje("CLARITA", "/assets/imagenes/6.png", " Es la novia de Javi", 2);

  ngOnInit(): void {
    
    this.listaDePersonajes = [
      new Personaje("CLARA", "/assets/imagenes/6.png", " Es la novia de Javi y no nos cae bien", 2),
      new Personaje("DMP", "/assets/imagenes/7.png", " Es mi padre pero es homosexual", 33),
      new Personaje("RAUL ", "/assets/imagenes/8.png", " Es drogadicto y tiene problemas familiares", 5),
      new Personaje("XOCAS ", "/assets/imagenes/9.png", " Esta esquizo y vive en Cocabelos", 22),
      new Personaje("LINEZ", "/assets/imagenes/10.png", " Es dealer y y es un tipo muy duro", 24),

    ]

  }


  
  
}
class Personaje{
 nombre:string;
 imagen:string;
 descripcion:string;
 edad:number;
 constructor(n : string, i : string, d : string, e : number){
  this.nombre = n;
  this.imagen = i;
  this.descripcion = d;
  this.edad = e;
 }   
}
