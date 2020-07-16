import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { ComponentsInteractionService } from 'src/app/services/components-interaction.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  deplegarRegistro: boolean;
  confirmacionPassword: string;
  constructor( private componentInteraction: ComponentsInteractionService ) { 
    this.usuario = new UsuarioModel();
  }

  ngOnInit() {
    this.componentInteraction.estadoRegistro$.subscribe(
      message => {
        this.deplegarRegistro = message;
      }
    );
  }

  onSubmit( f: NgForm ) {
    console.log('formulario submit');
    console.log(f);
    if (f.valid) {
      this.cerrarTodo();
    }
  }

  desplegarSiguiente(n: number) {
    const formularios = document.getElementsByClassName('registro-sheet');
    console.log(formularios[n]);
    formularios[n].classList.add('mostrar');
  }

  cerrarTodo() {
    const formularios = document.getElementsByClassName('registro-sheet');
    for (let i = 0; i < formularios.length ; i++ ) {
     formularios[i].classList.remove('mostrar');
    }
    this.deplegarRegistro = false;
  }

  regresar( n: number) {
    const formularios = document.getElementsByClassName('registro-sheet');
    formularios[n].classList.remove('mostrar');
  }

}
