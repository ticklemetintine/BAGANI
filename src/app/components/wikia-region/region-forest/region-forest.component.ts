import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-region-forest',
  templateUrl: 'region-forest.component.html',
  styles: []
})
export class RegionForestComponent implements OnInit {

  today: Date;
  hour: number;
  timeClass: string;


  constructor(
    ) { }

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    this.today = new Date();
    this.hour = this.today.getHours();

    if (this.hour > 5 && this.hour < 12) {
      this.timeClass = 'morning';
    } else if (this.hour > 11 && this.hour < 18) {
      this.timeClass = 'noon';
    } else {
      this.timeClass = 'evening';
    }
  }

}
