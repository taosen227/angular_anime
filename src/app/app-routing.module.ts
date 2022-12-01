import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Anime1Component } from './anime1/anime1.component';
import { Anime2Component } from './anime2/anime2.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'anime1',
    component:Anime1Component,
    data:{animation:'anime1'}
  },
  {
    path:'anime2',
    component:Anime2Component,
    data:{animation:'anime2'}
  },
  {
    path:'**',
    redirectTo:'anime1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
