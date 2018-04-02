import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LatestUpdatesService } from '../../../services/latest-updates.service';
import { InnerDesertService } from '../../../services/wikia-inner/inner-desert.service';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-inner-desert',
    templateUrl: 'inner-desert.component.html',
    styles: []
})
export class InnerDesertComponent implements OnInit {

    today: Date;
    hour: number;
    timeClass: string;
    updates:any = [];
    innerDesertData:any = [];
    userDetails: any = [];

    constructor(
        private _getUpdatesService: LatestUpdatesService,
        private _getUserService: UserService,
        private _getInnerDesert: InnerDesertService
    ) {}

    ngOnInit() {
        this.getTime();
        this.GetUpdates();
        this.getUserDetails();
        this.getInnerDesert();
    }

    updatesSlideConfig = {
        'slidesToShow': 5,
        'dots': false,
        'arrows': false,
        'infinite': false,
        'responsive': [{
                'breakpoint': 700,
                'settings': {
                    'slidesToShow': 3,
                    'slidesToScroll': 3
                }
            },
            {
                'breakpoint': 480,
                'settings': {
                    'slidesToShow': 1,
                    'slidesToScroll': 1,
                    'centerMode': true,
                    'infinite': true,
                    'centerPadding': '20px'
                }
            }
        ]
    };

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
    GetUpdates() {
        this._getUpdatesService.GetUpdates().subscribe(
            (data) => {
                this.updates = data.latestUpdates;
            }
        );
    }
    getUserDetails() {
        this._getUserService.GetUser().subscribe(
            (data) => {
                this.userDetails = data.userDetails;
            }
        );
    }

    getInnerDesert() {
        this._getInnerDesert.GetInnerDesert().subscribe(
            (data) => {
                this.innerDesertData = data.wikiaDesertInner;
                console.log(this.innerDesertData);
            }
        );
    }
}
