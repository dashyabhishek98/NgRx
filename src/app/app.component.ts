import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJs';
  @ViewChild('para') para : ElementRef<any>;
  constructor(){
    this.para = Object();
  }

  promise = new Promise((resolve,reject)=>{
    console.log('promise');
    resolve('Cat');
    resolve('Bat');
    resolve('Rat');
    //reject('Error');
  })

  executePromise(){
    console.log(this.para);
  }

}
