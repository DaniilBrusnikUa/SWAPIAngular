import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPeople} from '../../interfaces/people';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import * as Rx from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AsyncDataService {

  constructor(private http: HttpClient) {
  }

  user: IPeople;
  peopleList: Array<object> = [];
  configUrl = 'https://swapi.co/api';
  count: number;
  filmsArray = new Rx.BehaviorSubject(null);
  filmArray = new Rx.BehaviorSubject(null);
  SpaceshipsArray = new Rx.BehaviorSubject(null);


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

  getFilms(i) {
      return this.http.get(`https://swapi.co/api/films/${i}`).subscribe((res: any) => {
        this.filmsArray.next(res);
      });
  }
  getFilm(url) {
       this.http.get(url).subscribe((res: any) => {
        this.filmArray.next(res);
      });
  }
  getSpaceships(url) {
       this.http.get(url).subscribe((res: any) => {
        this.SpaceshipsArray.next(res);
      });
  }

  getCharacter(id) {
    return this.http.get(`${this.configUrl}/people/${id}`).pipe(
      map(data => {
        return data;
      })
    );
  }
  getSpecies(url) {
    return this.http.get(url).pipe(
      map(data => {
        return data;
      })
    );
  }

}
