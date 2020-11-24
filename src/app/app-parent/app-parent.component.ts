import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-parent',
  templateUrl: './app-parent.component.html',
  styleUrls: ['./app-parent.component.scss']
})
export class AppParentComponent implements OnInit {


  constructor() { }

  valueEmittedFromChildComponent: string = "";

  parentEventHandlerFunction(valueEmitted){
    this.valueEmittedFromChildComponent = valueEmitted;
    console.log("aaa"+valueEmitted);
  }

  ngOnInit(): void {
  }

}
