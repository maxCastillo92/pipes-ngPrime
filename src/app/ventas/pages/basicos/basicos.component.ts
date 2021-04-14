import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: []
})
export class BasicosComponent implements OnInit {
  nombreLowecase:string = 'Maximiliano';
  nombreUpppercase:string = 'MaXimiliano';
  nombreCompleto:string = 'MaXimiliano CasTiLLo';

  fecha:Date = new Date(); //el día de hoy
  constructor() { }

  ngOnInit() {
  }

}
