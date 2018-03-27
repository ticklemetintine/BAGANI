import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../../services/user.service';

@Pipe({name: 'spaceToDash'})
  export class SpaceToDash implements PipeTransform {
    transform(value: string): string {
      let newValue = value.replace('-', ' ');
      return `${newValue}`;
    }
}
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

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
