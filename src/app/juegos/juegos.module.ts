import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteFonsiComponent } from './componente-fonsi/componente-fonsi.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    ComponenteFonsiComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class JuegosModule { }
