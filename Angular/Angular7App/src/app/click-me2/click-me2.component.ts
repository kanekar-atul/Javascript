import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me2',
  templateUrl: './click-me2.component.html',
  styleUrls: ['./click-me2.component.css']
})
export class ClickMe2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickMessage = '';
  clicks = 1;

  onClickMe2(event: any) {
    let evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
    this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
  }
}
