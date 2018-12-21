import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPeople} from '../../interfaces/people';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AsyncDataService {

  constructor(private http: HttpClient) {
  }

  user: IPeople;
  peopleList: Array<object> = [];
  configUrl = 'https://swapi.co/api';
  count: number

  getPeople(page): Observable<IPeople[]> {
    const params = {
      page
    };
    return this.http.get<IPeople[]>(`${this.configUrl}/people`, {params}).pipe(
      map(data => {
        this.count = data['count'];
        return data['results'];
      })
    );
  }

  getFilms() {
    return this.http.get(`${this.configUrl}/films/4/`).subscribe((res) => {
      console.log(res);
    });
  }


}
