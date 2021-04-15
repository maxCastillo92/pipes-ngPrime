import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
// import { PrimeNGConfig } from 'primeng/api';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { CanFlyPipe } from './pipes/canFly.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';




@NgModule({
  declarations: [NumerosComponent,
                NoComunesComponent,
                BasicosComponent,
                OrdenarComponent,
                MayusculasPipe,
                CanFlyPipe,
                OrdenarPipe

              ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  // providers:[PrimeNGConfig]
})
export class VentasModule { }
