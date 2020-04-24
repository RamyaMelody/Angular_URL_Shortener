import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlHomeComponent } from './url-home/url-home.component';
import { UrlviewdbComponent } from './urlviewdb/urlviewdb.component';
import { RedirectComponent } from './redirect/redirect.component';


const routes: Routes = [
  {
    path: '',
    component: UrlHomeComponent
  },
  {
    path: ':id',
    component:RedirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
