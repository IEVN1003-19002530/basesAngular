import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';

  pelicula = 
  {
    nombre: 'Guardianes de la Galaxia',
    fechaLanzamiento: new Date(),
    precio: 150
  }

  duplicarNumero(valor:number):number
  {
    return valor*2;
  }
}