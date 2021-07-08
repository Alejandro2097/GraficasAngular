import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica');
  }
  getUsuariosRedesDonaData(){
    return this.getUsuariosRedesSociales()
    .pipe(
      delay(1500),
      map(data => {
        const labels = Object.keys(data);
        const value = Object.values(data);
        return { labels, value};
      })
    );
  }
}
