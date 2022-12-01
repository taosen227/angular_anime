import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
@Component({
  selector: 'app-root',
  animations: [
    // trigger('openClose', [
    //   state('aqua', style({
    //     height: '200px',
    //     opacity: 1,
    //     backgroundColor: 'aqua'
    //   })),
    //   state('blue', style({
    //     height: '200px',
    //     opacity: 0.8,
    //     backgroundColor: 'blue'
    //   })),
    //   transition('aqua <=> blue', [
    //     animate('0.5s')
    //   ]),
    // ]),
    // trigger('Test123',[
    //   state('true', style({
    //     fontSize:"20px",
    //     backgroundColor:'yellow',
    //     borderRadius:"0px" 
    //   })),
    //   state('false', style({
    //     fontSize:"40px",
    //     backgroundColor:'red',
    //     borderRadius:"30px" 
    //   })),
    //   transition('true <=> false' , [
    //     animate('0.5s',keyframes([
    //       style({ backgroundColor: 'blue', offset: 0}),
    // style({ backgroundColor: 'red', offset: 0.8}),
    // style({ backgroundColor: '#754600', offset: 1.0})]))
    //   ]),
    //   transition('void => *', [
    //     animate('0.5s',style({
    //       backgroundColor:"black"
    //     }))
    //   ])
    // ]),
    // trigger('flyInOut', [
    //   state('in', style({ transform: 'translateX(0)' })),
    //   transition('void => *', [
    //     style({ transform: 'translateX(-100%)' ,color:"red"}),
    //     animate("1s")
    //   ]),
    //   transition('* => void', [
    //     animate("3s", style({ transform: 'translateX(100%)',color:"yellow",fontSize:"30px" }))
    //   ])
    // ]),
    // trigger('shrinkOut', [
    //   state('in', style({ height: '*' })),
    //   transition('* => void', [
    //     style({ height: '*' }),
    //     animate(250, style({ height: 0 }))
    //   ])
    // ])
    slideInAnimation
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts){

  }
  title = 'anime';
  // isOpen = true;
  // isShown = true;
  // toggle() {
  //   this.isOpen = !this.isOpen;
  //   this.isShown = !this.isShown;
  // }
  // start(){
  //   console.log("start")
  // }
  // done(){
  //   console.log("done")
  // }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
