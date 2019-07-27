import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formContato: FormGroup;

  @Input()
  contatoSelecionado: Contato;

  constructor(private fb: FormBuilder, private contatoService: ContatoService) {
    this.formContato = fb.group({
      id:[],
      nome: ['', [Validators.required, Validators.maxLength(16)]],
      cpf: ['', [Validators.required, 
       // Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/), subistituido pelas validações do pacote ngx-mask
                 Validators.minLength(11),
                 Validators.maxLength(11)]
           ],
      email: ['', [Validators.required, 
                   Validators.email]
             ],
      telefone: ['', [Validators.pattern('^[0-9]+$'), // fiz sem o ngx-mask pra variar um pouco, mas no padrão faria com mascara
                      Validators.minLength(8), 
                      Validators.maxLength(9)]
                ],
      endereco: [],
      cidade: ['',[Validators.required,
                   Validators.maxLength(16)]
              ],
      estado: ['',Validators.required],
      cep: []//[Validators.pattern(/^\d{5}\-\d{3}$/)] subistituido pelas validações do pacote ngx-mask
    });
  } 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["contatoSelecionado"]) { //verifica sempre que tiver mudança
      if (this.contatoSelecionado) {
        this.formContato.setValue(this.contatoSelecionado);
      }
    }
  } 

  ngOnInit() {
  }

  verificaValidTouched(campo){

    return !this.formContato.get(campo).valid && this.formContato.get(campo).touched;
  }

  aplicaCssErro(campo){
    return{
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  onSave() {
    if (this.formContato.invalid) {
      alert("Formulario invalido")
      return;
    }

    const contato: Contato = <Contato>this.formContato.value;
    this.contatoService.saveContato(contato);
    this.formContato.reset();
  }


}
