import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LatestUpdatesService } from '../../../services/latest-updates.service';
import { InnerTradeService } from '../../../services/wikia-inner/inner-trade.service';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-inner-trade',
    templateUrl: 'inner-trade.component.html',
    styles: []
})
export class InnerTradeComponent implements OnInit {

    today: Date;
    hour: number;
    timeClass: string;
    updates:any = [];
    innerTradeData:any = [];
    userDetails: any = [];

    constructor(
        private _getUpdatesService: LatestUpdatesService,
        private _getUserService: UserService,
        private _getInnerTrade: InnerTradeService

    ) {}

    ngOnInit() {
        this.getTime();
        this.GetUpdates();
        this.getUserDetails();
        this.getInnerTrade();
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

    getInnerTrade() {
        this._getInnerTrade.GetInnerTrade().subscribe(
            (data) => {
                this.innerTradeData = data.wikiaTradeInner;
            }
        );
    }

}
