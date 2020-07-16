import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsInteractionService {

  private estadoRegistroSource = new Subject<boolean>();
  estadoRegistro$ = this.estadoRegistroSource.asObservable();

  constructor() { }

  mandarEstado(estado: boolean) {
    this.estadoRegistroSource.next(estado);
  }
}
