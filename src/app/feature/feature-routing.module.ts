import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDiretivaComponent } from './form-diretiva/form-diretiva.component';

const routes: Routes = [
  {path: 'teste', component: FormDiretivaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }