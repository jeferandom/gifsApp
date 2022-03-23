import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//@note eleva este servicio a una disponibilidad global y evita tener que declararlo en los providers del modulo
})
export class GifsService {
  private _historial: string[] = [];
  private apikey: string = 'es1Be5tdbAymLQFhIO6J5c2pLYT0CCzW';

  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) { }
  buscarGifs(query: string) {
    query = query.trim();
    if (!this.historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    console.log(this._historial)
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=es1Be5tdbAymLQFhIO6J5c2pLYT0CCzW&q=goku&limit=10')
      .subscribe((resp: any) => {
        console.log(resp.data)
      })
  }


}
