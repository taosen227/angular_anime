import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
  // ...
} from '@angular/animations';
import { Hero, HEROES } from '../Hero';
@Component({
  selector: 'app-anime2',
  templateUrl: './anime2.component.html',
  styleUrls: ['./anime2.component.scss'],
  animations: [
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: 0 }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: 0 })),
          ]),
        ])
      ]),
    ]),
  ]
})
export class Anime2Component implements OnInit {
  heroesTotal = -1;
  inputName:string="";
  get heroes() { return this._heroes; }
  private _heroes: Hero[] = [];

  ngOnInit() {
    this._heroes = HEROES;
  }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';

    this._heroes = HEROES.filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()));
    const newTotal = this.heroes.length;

    if (this.heroesTotal !== newTotal) {
      this.heroesTotal = newTotal;
    } else if (!criteria) {
      this.heroesTotal = -1;
    }
  }

  add(){
    let currentid = 0;
    this._heroes.forEach(data => {
      if(data.id > currentid){
        currentid = data.id;
      }
    });
    let data:Hero = {
      id:++currentid,
      name:this.inputName
    }
    this._heroes.push(data);
  }
  
  clean(){
    this._heroes = []
  }
}
