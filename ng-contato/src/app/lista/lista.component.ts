import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }
  
  @Output()
  contatoSelecionadoEvento: EventEmitter<any> = new EventEmitter;
  listaContato: Contato[] = [];

  ngOnInit() { //manda serviço pra buscar os contatos pra minha variavel listaContato[]
    this.listaContato = this.contatoService.getContato();
  }

  onSelecionado(contato: Contato){
    this.contatoSelecionadoEvento.emit(contato);
    console.log(contato.id);
  }

  onDelete(contato: Contato){
    this.contatoService.onExcluindo(contato);
  }

  
}
