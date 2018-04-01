import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import { BadgesService } from '../../services/badges.service';
import { UserService } from '../../services/user.service';
import { SidebarHelpService } from '../../services/sidebar-help.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  journalEntries:any = [];
  journalHeading:string;
  doneItems:number;
  today:any = Date.now();
  start:any;
  end:any;
  remaining:any;
  status:string;
  badgesData:any = [];
  currentBadgeView:any = [];
  userDetails: any = [];
  helpData:string;

  constructor(
  	private _getJournalService: JournalService,
  	private _getBadgesService: BadgesService,
  	private _getHelpService: SidebarHelpService,
  	private _getUserService: UserService
  ) { }

  ngOnInit() {
  	this.getJournalEntries();
  	this.getBadgesData();
  	this.getUserDetails();
  	this.getHelpData();
  }

  getUserDetails() {
        this._getUserService.GetUser().subscribe(
            (data) => {
                this.userDetails = data.userDetails;
            }
        );
  }

  getJournalEntries() {
        this._getJournalService.GetJournal().subscribe(
            (data) => {
                this.journalEntries = data.journal;
                this.journalHeading = data.journalHeading;
            }
        );
  }
  countStatus(challenges) {
  	this.doneItems = 0;
  	for (let challenge of challenges) {
  		if(challenge.status == 'done') {
  			this.doneItems++;
  		}
	}

	return this.doneItems;

  }

  getProgress(challenges, totalChallenges) {
  	this.doneItems = 0;
  	for (let challenge of challenges) {
  		if(challenge.status == 'done') {
  			this.doneItems++;
  		}
	}
  	return (this.doneItems/totalChallenges)*100;
  }
  getBadgesData() {
    this._getBadgesService.GetBadges().subscribe(
        (data) => {
            this.badgesData = data.badgesList;
            this.currentBadgeView = data.badgesList[0];
        }
    );
  }
  getHelpData() {
    this._getHelpService.GetHelp().subscribe(
        (data) => {
            this.helpData = data.helpText;
        }
    );
  }
  currentBadge(badge) {
    this.currentBadgeView = badge;

  }	

}
