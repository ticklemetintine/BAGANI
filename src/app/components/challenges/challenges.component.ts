import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-challenges',
  templateUrl: 'challenges.component.html',
  styles: []
})
export class ChallengesComponent implements OnInit {

	userDetails: any = [];

  constructor(
  	private _getUserService: UserService
  	) { }

  ngOnInit() {
  	this.getUserDetails();
  }

  getUserDetails() {
  	this._getUserService.GetUser().subscribe(
            (data) => {
                this.userDetails = data.userDetails;
            }
        );
  }

}
