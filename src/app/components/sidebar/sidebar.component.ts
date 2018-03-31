import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  journalEntries:any = [];
  doneItems:number;
  today:any = Date.now();
  start:any;
  end:any;
  remaining:any;
  status:string;

  constructor(
  	private _getJournalService: JournalService
  ) { }

  ngOnInit() {
  	this.getJournalEntries();
  }

  getJournalEntries() {
        this._getJournalService.GetJournal().subscribe(
            (data) => {
                this.journalEntries = data.journal;
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
}
