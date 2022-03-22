import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//@note eleva este servicio a una disponibilidad global y evita tener que declararlo en los providers del modulo
})
export class GifsService {
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim();
  if(!this.historial.includes(query)){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);
  }
    console.log(this._historial)
  }


}
