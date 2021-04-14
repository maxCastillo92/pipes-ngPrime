import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: []
})
export class NoComunesComponent  {

  // i18nSelect
  nombre: string = 'Maximiliano';
  genero: string = "masculino";
  invitcionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nPlural
  clientes:string [] = [ 'Maria', 'Pedro', 'Juan', 'Chofiz', 'Harry'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

  public cambiarNombre (): string{
    return this.nombre = 'Maria', this.genero = 'femenino'
  }

  public eliminarCliente(): string{
    return this.clientes.pop();
  }

  // keyValue Pipe
  persona = {
    nombre: 'Maximiliano',
    edad: 28,
    direccion: 'Las fuentes'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: true
    },
  ]

  //AsyncPipe
  miObservable = interval( 5000 );

  valorPromesa = new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve('Tenemos data')}, 10000);
  });
  constructor(  ) { }



}
