import { Component, OnInit } from '@angular/core';

import { MusicaService } from '../../services/musica.service';
import { CancionModel } from '../../models/cancion.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( ) {
  }

  ngOnInit() {
  }

}
