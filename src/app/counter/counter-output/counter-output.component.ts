import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter : number;
  counter$ : Observable<number>;
  //counterSubscription : Subscription;
  constructor(private store : Store<AppState>) {
    this.counter = 0;
    //this.counterSubscription = new Subscription();
    this.counter$ = new Observable();
  }

  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe((data: { counter: number; }) =>{
    //   this.counter = data.counter;
    // });
    this.counter$ = this.store.select(getCounter);
    this.counter$.subscribe(data => {
      console.log('Counter Observable')
      this.counter = data;
    });
  }

  // ngOnDestroy(){
  //   if(this.counterSubscription){
  //     this.counterSubscription.unsubscribe();
  //   }
  // }

}
