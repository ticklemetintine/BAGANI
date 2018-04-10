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
  public journalEntries:any = [];
  public journalHeading:string;
  public journalTime:string;
  public doneItems:number;
  public today:any = Date.now();
  public start:any;
  public end:any;
  public remaining:any;
  public status:string;
  public badgesData:any = [];
  public currentBadgeView:any = [];
  public userDetails: any = [];
  public helpData:string;

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

            this.journalEntries.forEach((value, index) => {
                var start_date = new Date(value.startDateTime).getHours() + 8;
                var end_date = new Date(value.endDateTime);

                console.log(new Date());
                console.log(new Date(value.startDateTime));
                //CHECK IF CHALLENGE IS OVER
                if(this.today > end_date && end_date) {
                  this.journalEntries.splice(index, 1);
                }
            });

            setInterval(()=>{    
              this.journalEntries.forEach((value, index) => {
                var one_day=1000*60*60*(24+8);

                var date_now = new Date().getTime();
                var start_date = new Date(value.startDateTime);
                var end_date = new Date(value.endDateTime);

                var date1_ms = new Date(value.startDateTime).getTime();
                var date2_ms = new Date(value.endDateTime).getTime();

                //check if challenge has not been started
                if(this.today < start_date && start_date && this.today < end_date && end_date) {
                  // Calculate the difference in milliseconds
                  var difference_ms = date1_ms - date_now;

                  //take out milliseconds
                  difference_ms = difference_ms/1000;
                  var seconds = Math.floor(difference_ms % 60);
                  difference_ms = difference_ms/60; 
                  var minutes = Math.floor(difference_ms % 60);
                  difference_ms = difference_ms/60; 
                  var hours = Math.floor(difference_ms % 24);  
                  var days = Math.floor(difference_ms/24);
                  this.journalEntries[index].ongoing = false;

                } else { 
                  // for ongoing challenge
                  // Calculate the difference in milliseconds
                  var difference_ms = date2_ms-28800000 - date_now;

                  //take out milliseconds
                  difference_ms = difference_ms/1000;
                  var seconds = Math.floor(difference_ms % 60);
                  difference_ms = difference_ms/60; 
                  var minutes = Math.floor(difference_ms % 60);
                  difference_ms = difference_ms/60; 
                  var hours = Math.floor(difference_ms % 24);  
                  var days = Math.floor(difference_ms/24);
                  this.journalEntries[index].ongoing = true;
                }
                
                this.journalEntries[index].journalTime = hours + ':' + minutes + ':' + seconds;
              }); 
              
            }, 1000);
        }
    );
  }
  // getTimeLeft() {
  //   // setTimeout(()=>{    
  //     //this.helpData = new Date(); // Updates view
  //     this._getHelpService.GetHelp().subscribe(
  //         (data) => {
  //             this.helpData = data.helpText;
  //         }
  //     );
  //   // },3000);
  // }

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
