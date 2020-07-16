import { Component, OnInit } from '@angular/core';
import { CancionModel } from 'src/app/models/cancion.model';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  canciones: any[] = [];
  loading: boolean;
  cancion: any = new Audio();
  track: CancionModel;
  play: boolean;

  constructor( private musica: MusicaService ) {
    this.track = new CancionModel();
    this.play = false;
  }

  ngOnInit() {
  }

  buscarCanciones( ) {
    console.log('buscar');
    this.canciones = this.musica.getCanciones();

  }

  reproducir( eleccion?: any) {

    if ( eleccion ) {
      this.cancion.src = eleccion.pista;
      this.cancion.play();
      this.track = eleccion;
    } else {
      this.cancion.play();
    }
    this.play = !this.play;
  }

  detenerCancion( ) {
    this.cancion.pause();
    this.play = !this.play;

  }

}
