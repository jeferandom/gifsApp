import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'//@note eleva este servicio a una disponibilidad global y evita tener que declararlo en los providers del modulo
})
export class GifsService {
  private _historial: string[] = [];

  private apikey: string = 'es1Be5tdbAymLQFhIO6J5c2pLYT0CCzW';

  public resultados: Gif[] = [];

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

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=es1Be5tdbAymLQFhIO6J5c2pLYT0CCzW&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data)
        this.resultados = resp.data;
      })
  }


}
