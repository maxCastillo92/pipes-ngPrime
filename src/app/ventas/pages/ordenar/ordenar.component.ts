import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: []
})
export class OrdenarComponent implements OnInit {
  ordenarPor:string = 'nombre';

  cambiarMayusculas:boolean = false;
  tipoDeToogle:string = 'MAYÚSCULAS';
  heroes: Heroe[] = [
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Mujer maravilla',
      vuela: false,
      color: Color.rojo,
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  public toogleMayusculas(): void {
    this.cambiarMayusculas = !this.cambiarMayusculas
    this.cambiarMayusculas === true ? this.tipoDeToogle ='Minusculas' : this.tipoDeToogle = 'MAYÚSCULAS';
  }
   public cambiarOrden(valor: string){
     console.log('valor', valor)
     this.ordenarPor = valor;
   }
}
