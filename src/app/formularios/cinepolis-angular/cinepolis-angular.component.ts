import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis-angular',
  templateUrl: './cinepolis-angular.component.html',
  styleUrl: './cinepolis-angular.component.css'
})
export class CinepolisAngularComponent
{
  "nombre":string
  "personas":number
  "boletosT":number 
  "boletosMax":number 
  "tarjeta":boolean
  boletoP:number = 12
  "total":number
  "mensaje":string

  calcular() 
  {
    this.boletosMax = this.personas * 7;

    if (this.boletosT > this.boletosMax) 
    {
      this.mensaje = "No puedes comprar más de: " + this.boletosMax + " boletos.";
      return;
    }

    this.total = this.boletosT * this.boletoP;

    if (this.boletosT >= 5)
    {
      this.total -= this.total * 0.15;
    }
    else 
    {
      this.total -= this.total * 0.10;
    }

    if (this.tarjeta)
    {
      this.total -= this.total * 0.10;
    }

    this.mensaje = "Calculo hecho. Total: $" + this.total.toFixed(2);
  }
} 