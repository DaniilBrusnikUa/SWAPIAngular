import {Component, Input, OnInit} from '@angular/core';
import {AsyncDataService} from '../../services/async-services/async-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  filteredUsers: any;
  count: number;
  page = 1;
  constructor(private peopleData: AsyncDataService ) {
  }

  ngOnInit() {
   this.getData(this.page);
  }
  getData(page) {
    this.peopleData.getPeople(page).subscribe((res) => {
      this.count = this.peopleData.count;
      this.filteredUsers = res;
    });
  }
}
