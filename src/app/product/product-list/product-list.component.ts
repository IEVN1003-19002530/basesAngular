import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list', //manera de llamar a otros componentes 
  templateUrl: './product-list.component.html', 
  styleUrl: './product-list.component.css' //referencia de los archivos de estilo
})
export class ProductListComponent
{
  title = "Saluno de variable";
  imageWidth:number = 50;
  imageMargi:number = 2;
  muestraImg:boolean = true;
  listFilter:string='';

  showImage():void
  {
    this.muestraImg = !this.muestraImg;
  }

  productos:any[] = 
  [
    {
      "productoId":1,
      "Modelo": 'Porsche 911 Carrera S',
      "Descripcion": "2 puertas",
      "year": "marzo 18 2024",
      "Precio": 1000000,
      "Marca": "Porsche",
      "Color": "Rojo",
      "imagenUrl": "https://vehicle-images.dealerinspire.com/d4e3-11000617/WP0AB2A90RS221428/dc653ab98d0bc35232d0cc2ef06682e9.jpg"
    },
    {
      "productoId":2,
      "Modelo": 'lamborghini diablo',
      "Descripcion": "2 puertas",
      "year": "30 Junio 2024",
      "Precio": 2000000,
      "Marca": "Lamborghini",
      "Color": "Amarillo",
      "imagenUrl": "https://a.d-cd.net/b98fg1s-1920.jpg"
    },
    {
      "productoId":3,
      "Modelo": 'Corvette C4 1990',
      "Descripcion": "2 puertas",
      "year": "3 de Enero 1990",
      "Precio": 3000000,
      "Marca": "Chevrolet",
      "Color": "Rojo",
      "imagenUrl": "https://www.corvsport.com/wp-content/uploads/2017/02/1990_Chevrolet_Corvette_ZR1_Coupe__C_4__supercar_muscle__r_1600x1200.jpg"
    } 
  ]
}
