import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessageComponent } from './message/message.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { ClickMe2Component } from './click-me2/click-me2.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'message', component: MessageComponent },
  { path: 'click-me', component: ClickMeComponent },
  { path: 'click-me-2', component: ClickMe2Component }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
