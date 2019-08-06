import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero';
import { HEROES } from './mock/heros';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero:Hero = {
    id:1,
    name:"Atul"
  }

  heroes = HEROES;

  selectedHero:Hero;

  serviceUserList:Hero[];

  constructor(private heroService:HeroService) {
    console.log("This is from constructor()...");
   }

  ngOnInit() {
    console.log("This is from ngOnInit()...");
    this.getAllUser();
  }

  onSelect(hero){  
      this.selectedHero  =hero;
  }


  getAllUser(){
    this.heroService.getAllUsers().subscribe(userlist => this.serviceUserList = userlist);
  }

}
