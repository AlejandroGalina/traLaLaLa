import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private canciones: Cancion[] = [
    {
      nombre: 'English Country Garden',
      genero: 'Clásica',
      artista: 'Aaron Kenny',
      duracion: 0,
      img: 'assets/imagenes/clasica.jpg',
      pista: 'assets/musica/clasica.mp3'
    },
    {
      nombre: 'Finding Light',
      genero: 'blues',
      artista: 'Dan Lebowitz',
      duracion: 0,
      img: 'assets/imagenes/blues.jpg',
      pista: 'assets/musica/blues.mp3'
    },
    {
      nombre: 'Motor Hums',
      genero: 'Rock',
      artista: 'The 126ers',
      duracion: 0,
      img: 'assets/imagenes/rock.jpg',
      pista: 'assets/musica/rock.mp3'
    },
    {
      nombre: 'Majesty',
      genero: 'POP',
      artista: 'Spazz Cardigan',
      duracion: 0,
      img: 'assets/imagenes/pop.jpg',
      pista: 'assets/musica/pop.mp3'
    }
    ,
    {
      nombre: 'Lands Unknown',
      genero: 'Electronica',
      artista: 'Futuremono ',
      duracion: 0,
      img: 'assets/imagenes/electronica.jpg',
      pista: 'assets/musica/electronica.mp3'
    }
  ];

  constructor() { }

  getCanciones() {
    return this.canciones;
  }
}

interface Cancion {
    nombre: string;
    genero: string;
    artista: string;
    duracion: number;
    img: string;
    pista: string;
}
