import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resistencias-angular',
  templateUrl: './resistencias-angular.component.html',
  styleUrls: ['./resistencias-angular.component.css']
})
export class ResistenciasAngularComponent {
  resistenciaForm: FormGroup;
  resultados: any[] = [];

  colorValues: any = {
    'Negro': 0, 'Cafe': 1, 'Rojo': 2, 'Naranja': 3, 'Amarillo': 4,
    'Verde': 5, 'Azul': 6, 'Violeta': 7, 'Gris': 8, 'Blanco': 9
  };

  multiplicadorValues: any = {
    'Negro': 1, 'Cafe': 10, 'Rojo': 100, 'Naranja': 1000, 'Amarillo': 10000,
    'Verde': 100000, 'Azul': 1000000, 'Violeta': 10000000, 'Gris': 100000000, 'Blanco': 1000000000
  };

  toleranciaValues: any = {
    'oro': 5,
    'plata': 10
  };

  colorMap: any = {
    'Negro': 'black', 'Cafe': '#8B4513', 'Rojo': 'red', 'Naranja': 'orange', 'Amarillo': 'yellow',
    'Verde': 'green', 'Azul': 'blue', 'Violeta': 'purple', 'Gris': 'gray', 'Blanco': 'white',
    'Dorado': '#FFD700', 'Plateado': '#C0C0C0' // Agregando los colores dorado y plateado
  };

  constructor(private fb: FormBuilder) {
    this.resistenciaForm = this.fb.group({
      color1: ['Negro'],
      color2: ['Negro'],
      color3: ['Negro'],
      tolerancia: ['oro']
    });
  }

  registrar() {
    const formValue = this.resistenciaForm.value;

    const valorBase = (this.colorValues[formValue.color1] * 10) + this.colorValues[formValue.color2];
    const valor = valorBase * this.multiplicadorValues[formValue.color3];
    
    const toleranciaValor = this.toleranciaValues[formValue.tolerancia];
    const valorMaximo = valor + (valor * toleranciaValor / 100);
    const valorMinimo = valor - (valor * toleranciaValor / 100);

    const valorConUnidad = this.formatOhmios(valor);
    const valorMaximoConUnidad = this.formatOhmios(valorMaximo);
    const valorMinimoConUnidad = this.formatOhmios(valorMinimo);

    const resultado = {
      color1: formValue.color1,
      color2: formValue.color2,
      color3: formValue.color3,
      tolerancia: formValue.tolerancia === 'oro' ? 'Dorado' : 'Plateado',
      valor: valorConUnidad,
      valorMaximo: valorMaximoConUnidad,
      valorMinimo: valorMinimoConUnidad
    };

    this.resultados.push(resultado);
  }

  getCellStyle(color: string) {
    const backgroundColor = this.colorMap[color] || 'white';
    const textColor = (color === 'Amarillo' || color === 'Blanco' || color === 'Dorado' || color === 'Plateado') ? 'black' : 'white';

    return {
      backgroundColor: backgroundColor,
      color: textColor
    };
  }

  formatOhmios(valor: number) {
    if (valor >= 1000000) {
      return (valor / 1000000).toFixed(1) + ' MΩ';
    } else if (valor >= 1000) {
      return (valor / 1000).toFixed(1) + ' kΩ';
    } else {
      return valor + ' Ω';
    }
  }
}
