import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountryNumber } from './Pipes/CountryNumber';

import { AppComponent } from './app.component';
import { CodigosComponent } from './codigos/codigos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CodigosComponent,
    FormularioComponent,
    CountryNumber
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
