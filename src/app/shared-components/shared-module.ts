import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MatCheckboxModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {PeopleTableComponent} from './table/people-table.component';
import {StarWarsComponent} from './start-wars/star-wars.component';

@NgModule({
  declarations: [
    PeopleTableComponent,
    StarWarsComponent],
  exports: [
    PeopleTableComponent,
    StarWarsComponent

  ],

  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,


/*
    PipeModule.forRoot()
*/
  ],

  providers: [
  ]
})

export class SharedModule { }
