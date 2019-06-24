import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDiretivaComponent } from './form-diretiva/form-diretiva.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [
    FormDiretivaComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  exports: [
  ],
  providers: []
})
export class FeatureModule { }