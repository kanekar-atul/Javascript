import { Component, OnInit,OnDestroy } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit,OnDestroy {

  bodyClasses = 'skin-red sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
  
  constructor() { }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-red');
    this.body.classList.add('sidebar-mini');
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-red');
    this.body.classList.remove('sidebar-mini');
  }

}
