import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


// ---------------------------Components----------------------------
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { RegistroComponent } from './components/registro/registro.component';


// ---------------------------agm----------------------------
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './components/mapa/mapa.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    IntroComponent,
    ReproductorComponent,
    RegistroComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // para uso de desarollo
      apiKey: 'AIzaSyCo0J6MnB0RvyROBOm2aeKIJwwTtrV2gxc',
    })
  ],
  providers: [
    // SpotifyServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
