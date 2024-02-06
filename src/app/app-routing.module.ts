import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PptComponent } from './ppt/ppt.component';
import { ListaComponent } from './lista/lista.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { PruebaMaterialComponent } from './prueba-material/prueba-material.component';
import { LandindPageComponent } from './landind-page/landind-page.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: '', component: LandindPageComponent},
  {path: 'piedra-papel-tijera', component: PptComponent},
  {path: 'lista-personajes', component: ListaComponent},
  {path: 'semaforo', component: SemaforoComponent},
  {path: 'prueba-material', component: PruebaMaterialComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
