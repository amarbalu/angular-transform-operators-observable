import { Component } from '@angular/core';
import {Observable, fromEvent,of,interval} from "rxjs";
import {bufferTime,map, concatMap,take, mergeMap, switchMap} from "rxjs/operators";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
//Transformation operators - bufferTIme,map,mergeMap,concatMap,switchMap,tap,scan
export class AppComponent  {
  name = 'Transformation Operators';

  constructor(){
    const event=fromEvent(document,'click');
    //buffer Time helps to capture observer - particular time how much emitted in form of array
    // event.pipe(bufferTime(1000)).subscribe(value=>console.log('bufferTime',value))

    const obs = of(1,2,3,4);
    const obse =of("a","b","c","d");
    // obs.pipe(map(value=>value+10)).subscribe(cal=>console.log(cal))


// concatMap follows sequence of observer like concat function
//it follows like 01230123012301
    // obse.pipe(concatMap(value=>interval(1000).pipe(take(4))),take(10)).subscribe(cal=>console.log(cal))

// mergeMap follows sequence of observer which ever emit & receives  first and completes the entire sequence
//it follows like 00001111222233
    // obse.pipe(mergeMap(value=>interval(1000).pipe(take(4))),take(10)).subscribe(cal=>console.log(cal))


// switchMap follows sequence of observer which change in receive of observer comes for example from 0 -> 1 or 1->2 it forgets remaining 3 values of 0 value or 1 value in other case like search dropdown.
    // obse.pipe(switchMap(value=>interval(1000).pipe(take(4))),take(10)).subscribe(cal=>console.log(cal))
  }

}
