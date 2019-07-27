import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from './contato';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  endPoint: string = "api/contatos";
  lista: Contato[] = [];
  indexTop: number = -1;
  
  
  
constructor() { }

  getContato(): Contato[]{
    return this.lista;
  }

//primeiro contato é variavel o segundo é o tipo

  saveContato(contato: Contato){
    // vai colocando ID no negocinho
    if (contato.id == null){
      this.indexTop += 1;
      contato.id = this.indexTop;      
    }

    let index = null;
    for(var i = 0;i<this.lista.length; i++){
      if(this.lista[i].id == contato.id){
        index = i;
      }
    }
    if (index != null){
      this.lista[index] = contato;
    }else{
      this.lista.push(contato); //contato variavel
    }
  }


  onExcluindo(contato: Contato){
    this.lista.splice(this.lista.indexOf(contato), 1);
  }
}
