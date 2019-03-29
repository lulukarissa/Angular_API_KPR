import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkemakprComponent } from './skemakpr/skemakpr.component';
import { DetailkprComponent } from './detailkpr/detailkpr.component';
import { FormkprComponent } from './formkpr/formkpr.component';

const routes: Routes = [

  //default route
  { path: '', redirectTo: '/skemakpr', pathMatch: 'full' },

  { path: 'skemakpr', component: SkemakprComponent },
  { path: 'detailkpr/:id', component: DetailkprComponent },
  { path: 'formkpr', component: FormkprComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
