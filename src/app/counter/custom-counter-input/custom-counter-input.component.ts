import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelname, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value : number;
  ChannelName: string;
  constructor(private store:Store<{counter : CounterState}>) {
    this.value = 0;
    this.ChannelName = "";
   }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe(data =>{
      console.log('Channel Observable');
      this.ChannelName = data;
    })
  }
  onChangeChannelName(){
    this.store.dispatch(changeChannelname());
  }

  onAdd(){
    this.store.dispatch(customIncrement({value : +this.value}));
  }
}
