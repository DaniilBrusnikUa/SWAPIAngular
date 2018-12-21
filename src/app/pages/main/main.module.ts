import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MainRoutingModule} from './main-routing.module';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import {MainComponent} from './main.component';
import {SharedModule} from '../../shared-components/shared-module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule
  ],
  declarations: [MainComponent]
})
export class MainModule {}
