 
import { StarterComponent } from './../starter/starter.component'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LandingPageComponent} from '../landing-page/landing-page.component';
import { HomeComponent } from '../home/home.component';
import { DrinkComponent } from '../drink/drink.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'start-order', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent },
      { path: 'start-order', component: LandingPageComponent },
      { path: 'home', component: HomeComponent },
      { path: 'drink', component: DrinkComponent }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
