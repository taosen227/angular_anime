import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  animateChild,
  group,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-anime1',
  templateUrl: './anime1.component.html',
  styleUrls: ['./anime1.component.scss'],
  animations:[
    trigger('flyInOut', [
      state('in', style({
        width: '*',
        transform: 'translateX(0)', opacity: 1
      })),
      transition(':enter', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: '*'
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition(':leave', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class Anime1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isShown = true;
  toggle() {
    this.isShown = !this.isShown;
  }
}
