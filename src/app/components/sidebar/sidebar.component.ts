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
  journalTime:string;
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

                setInterval(()=>{    
                        //Get 1 day in milliseconds
                        var one_day=1000*60*60*24;
                        // Convert both dates to milliseconds
                        var date1_ms = new Date(data.journal[0].startDateTime).getTime();
                        var date2_ms = new Date(data.journal[0].endDateTime).getTime();
                        var date_now = new Date().getTime();
                        // Calculate the difference in milliseconds
                        var difference_ms = date2_ms - date_now;
                        //take out milliseconds
                        difference_ms = difference_ms/1000;
                        var seconds = Math.floor(difference_ms % 60);
                        difference_ms = difference_ms/60; 
                        var minutes = Math.floor(difference_ms % 60);
                        difference_ms = difference_ms/60; 
                        var hours = Math.floor(difference_ms % 24);  
                        var days = Math.floor(difference_ms/24);
                        this.journalTime = hours + ':' + minutes + ':' + seconds;
                },1000);
            }
        );
  }
  getTimeLeft() {
    setTimeout(()=>{    
      //this.helpData = new Date(); // Updates view
      this._getHelpService.GetHelp().subscribe(
          (data) => {
              this.helpData = data.helpText;
          }
      );
    },3000);
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
