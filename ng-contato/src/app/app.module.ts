import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
