import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { LatestUpdatesService } from '../../../services/latest-updates.service';

@Component({
    selector: 'app-inner-forest',
    templateUrl: 'inner-forest.component.html',
    styles: []
})
export class InnerForestComponent implements OnInit {

    today: Date;
    hour: number;
    timeClass: string;
    updates = [];

    updatesSlideConfig = {
        'slidesToShow': 5,
        'dots': false,
        'arrows': false,
        'infinite': false,
        'responsive': [{
                'breakpoint': 600,
                'settings': {
                    'slidesToShow': 2,
                    'slidesToScroll': 2
                }
            },
            {
                'breakpoint': 480,
                'settings': {
                    'slidesToShow': 1,
                    'slidesToScroll': 1,
                    'centerMode': true,
                    'infinite': true
                }
            }
        ]
    };

    constructor(
        private _getUpdatesService: LatestUpdatesService
    ) {}

    ngOnInit() {
        this.getTime();
        this.GetUpdates();
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
    GetUpdates() {
        this._getUpdatesService.GetUpdates().subscribe(
            (data) => {
                this.updates = data.latestUpdates;
            }
        );
    }

}