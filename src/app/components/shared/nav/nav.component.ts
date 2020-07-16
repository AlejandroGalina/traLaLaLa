import { Component, OnInit } from '@angular/core';
import { ComponentsInteractionService } from 'src/app/services/components-interaction.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(  private componentInteraction: ComponentsInteractionService ) {
    window.addEventListener('scroll', (e) => {
      const scrollY = window.scrollY;
      // console.log(scrollY);
    } );
  }

  ngOnInit() {
  }

  deplegarRegistro() {
    console.log('desplegar registro');
    this.componentInteraction.mandarEstado(true);
  }

}
