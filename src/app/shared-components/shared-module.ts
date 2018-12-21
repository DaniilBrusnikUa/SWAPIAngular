import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {PeopleTableComponent} from './table/people-table.component';

@NgModule({
  declarations: [
    PeopleTableComponent  ],
  exports: [
    PeopleTableComponent

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
