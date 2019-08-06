import { Injectable } from '@angular/core';
import { Observable,of } from '../../../node_modules/rxjs';
import {Hero} from '../heroes/model/hero';
import { HEROES } from '../heroes/mock/heros'; 

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }


  public getAllUsers():Observable<Hero[]>
  {
    return of(HEROES);
  }

  
}
