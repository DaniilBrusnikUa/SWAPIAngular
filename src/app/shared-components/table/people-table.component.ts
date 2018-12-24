import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import * as Rx from 'rxjs';
import {AsyncDataService} from '../../services/async-services/async-data.service';
import {filter, map} from 'rxjs/operators';
import {Route, Router} from '@angular/router';

export interface PeriodicElement {
  name: string;
  height: number;
}

@Component({
  selector: 'app-table-people',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.less']
})

export class PeopleTableComponent implements OnInit {
  page = 1;
  _dataPeople = new Rx.BehaviorSubject(null);
  _dataFilms = new Rx.BehaviorSubject(null);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() count: any;
  @Output() nextPage: EventEmitter<any> = new EventEmitter();
  displayedColumns: string[] = ['gender', 'name', 'birth'];
  dataSource = new MatTableDataSource<any>();
  checkedHuman = false;
  selectValue: string;
  allFilmsArray = [];
  allData = [];
  minYear = 0;
  maxYear = 500;
  middleYear = 50;
  someRange = [0, 500];
  filmUrl = 'All films';

  @Input()
  set allPeople(value) {
    this._dataPeople.next(value);
  }

  @Input()
  set allFilms(value) {
    this._dataFilms.next(value);
  }

  constructor(private peopleData: AsyncDataService, private router: Router) {
  }

  ngOnInit() {
    this.allFilmsArray = [];
    this.dataSource.paginator = this.paginator;
    this._dataPeople.subscribe((res) => {
      if (res) {
        for (const character of res) {
          character.birth_year = character.birth_year.replace(/\D/g, '');
          if (character.birth_year.length === 0) {
            character.birth_year = 0;
          }
        }
        this.dataSource = new MatTableDataSource(res);
        this.allData = res;
      }

    });
    this._dataFilms.subscribe((res) => {
      if (res) {
        this.allFilmsArray.push(res);
      }
    });

  }

  getServerData(e) {
    this.checkedHuman = false;
    this.minYear = 0;
    this.maxYear = 500;
    this.someRange = [0, 500];
    this.selectValue = undefined;
    if (e.pageIndex > e.previousPageIndex) {
      this.page++;
    } else {
      this.page--;
    }
    this.nextPage.emit(this.page);
  }

  showHuman() {
    let filterValue = '';
    if (this.checkedHuman) {
      filterValue = 'male';
    } else {
      filterValue = '';
    }

    this.dataSource.filter = filterValue;
  }

  choiceFilm(filmUrl) {
    this.dataSource = new MatTableDataSource(this.allData);
    this.filmUrl = filmUrl;
    this.filterBorn(this.minYear, this.dataSource.filteredData);
    this.filterFilm(filmUrl, this.dataSource.data);
  }

  findFilm(filmArray, filmUrl) {
    return filmArray.films.find(film => film === filmUrl);
  }

  bornAfter(value) {

    this.minYear = value[0];
    this.maxYear = value[1];
    this.dataSource = new MatTableDataSource(this.allData);

    this.filterFilm(this.filmUrl, this.dataSource.data);
    this.filterBorn(this.minYear, this.dataSource.data);

  }

  filterFilm(filmUrl, data) {
    this.dataSource.data = data.filter((item) => {
      if (this.findFilm(item, filmUrl) !== undefined) {
        return item;
      } else if (filmUrl === 'All films') {
        this.dataSource = new MatTableDataSource(this.allData);
        this.filterBorn(this.minYear, this.dataSource.filteredData);
      }
    });
  }

  filterBorn(value, data) {
    this.minYear = value;
    this.dataSource.data = data.filter((item) => {
      if (+item.birth_year > value && +item.birth_year < this.maxYear) {
        return item;
      }
    });
  }

  routeProfile(profile) {
    const id = profile.url.split('/')[5];
    this.router.navigate(['/character', id]);
  }
}

