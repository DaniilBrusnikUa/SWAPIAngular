import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

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
  @Input() filteredUsers: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() count: any;
  @Output() nextPage: EventEmitter<any> = new EventEmitter();
  displayedColumns: string[] = ['gender', 'name'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.filteredUsers);


  constructor() {
  }

  ngOnInit() {
    console.log(this.dataSource);
    console.log(this.count);
    this.dataSource.paginator = this.paginator;
  }

  getServerData(e) {
    if (e.pageIndex > e.previousPageIndex) {
      this.page++;
    } else {
      this.page--;
    }
    this.nextPage.emit(this.page);

  }
}

