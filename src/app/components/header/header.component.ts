import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

	userDetails = [];

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
