import {Component, Input, OnInit} from '@angular/core';
import {AsyncDataService} from '../../services/async-services/async-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  allPeople: any;
  count: number;
  page = 1;
  checked = false;
  film = {};

  constructor(private peopleData: AsyncDataService) {
  }

  ngOnInit() {
    this.getData(this.page);
    for (let i = 1; i < 8; i++) {
      this.peopleData.getFilms(i);
    }
  }

  getData(page) {
    this.page = page;
    this.peopleData.getPeople(page).subscribe((res) => {
      this.count = this.peopleData.count;
      this.allPeople = res;
    });
    this.peopleData.filmsArray.subscribe((res) => {
      this.film = res;
    });
  }
}

