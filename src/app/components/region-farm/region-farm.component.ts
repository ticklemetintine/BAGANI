import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-region-farm',
  templateUrl: 'region-farm.component.html',
  styles: []
})
export class RegionFarmComponent implements OnInit {

  userDetails = [];
  today:Date;
  hour:number;
  timeClass:string;


  constructor(
    private _getUserService: UserService
    ) { }

  ngOnInit() {
    this.getUserDetails();
    this.getTime();
  }

  getUserDetails() {
    this._getUserService.GetUser().subscribe(
            (data) => {
                this.userDetails = data.userDetails;
            }
        );
  }
  getTime() {
    this.today = new Date();
    this.hour = this.today.getHours();

    if (this.hour > 5 && this.hour < 12) { 
      this.timeClass = "morning"
    } else if (this.hour > 11 && this.hour < 18) {
      this.timeClass = "noon"
    } else {
      this.timeClass = "evening"
    }
  }

}
