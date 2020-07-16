import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  lat: number;
  lng: number;
  constructor() { 
    this.lat = 19.4332492;
    this.lng = -99.140714;
  }

  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation() {

    if ( navigator.geolocation ) {
      let options: any;

      options = {
        enableHighAccuracy: true,
      };
      navigator.geolocation.getCurrentPosition( positon => {
        console.log(positon);
        this.lat = positon.coords.latitude;
        this.lng = positon.coords.longitude;
        // console.log('CALL 1');
      }, error => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log('permiso de Geolocation negado.');
            break;
          case error.POSITION_UNAVAILABLE:
            console.log('Location information is unavailable.');
            break;
          case error.TIMEOUT:
            console.log('"The request to get user location timed out."');
            break;
        }
      }, options);
    } else {
      // console.log('CALL 2');
    }
  }

}
