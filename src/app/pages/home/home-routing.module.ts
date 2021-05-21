//import { NgModule } from '@angular/core';
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Traductor } from 'src/app/decorators/traductor.decorator';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
