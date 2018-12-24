import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MatCheckboxModule, MatPaginatorModule, MatSelectModule, MatSliderModule, MatTableModule} from '@angular/material';
import {PeopleTableComponent} from './table/people-table.component';
import {StarWarsComponent} from './start-wars/star-wars.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from '../pipe/filmFilter';
import {NouisliderModule} from 'ng2-nouislider';

@NgModule({
  declarations: [
    PeopleTableComponent,
    StarWarsComponent,
    FilterPipe],
  exports: [
    PeopleTableComponent,
    StarWarsComponent

  ],

  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSliderModule,
    NouisliderModule

    /*
        PipeModule.forRoot()
    */
  ],

  providers: []
})

export class SharedModule {
}
