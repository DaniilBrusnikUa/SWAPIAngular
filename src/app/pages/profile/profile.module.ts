import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatButtonModule, MatCardModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import {SharedModule} from '../../shared-components/shared-module';
import {FormsModule} from '@angular/forms';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule {}
