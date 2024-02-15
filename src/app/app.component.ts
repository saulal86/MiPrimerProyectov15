import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimerProyectov15';
  nombreDeUsuario:string = "soraya";

  rutas:string[]=['piedra-papel-tijera', 'lista-personajes', 'semaforo', 'puebra-material']

  constructor(private router: Router){

  }


  cambiaRuta(){
    let numAleatorio = Math.floor(Math.random()*this.rutas.length)
    this.router.navigate([this.rutas[numAleatorio]]);
  }
}
