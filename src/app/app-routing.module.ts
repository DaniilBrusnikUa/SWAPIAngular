import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
/*  {
    path: '',
    loadChildren: '../app/components/index/index.module#IndexModule'
  },*/

  {
    path: '',
    loadChildren: 'src/app/pages/main/main.module#MainModule'
  },
  {
    path: 'character/:id',
    loadChildren: 'src/app/pages/profile/profile.module#ProfileModule'
  },

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
