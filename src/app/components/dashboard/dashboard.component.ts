import { Component, Input, Output, OnInit  } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LatestUpdatesService } from '../../services/latest-updates.service';
import { ArtworksService } from '../../services/artworks.service';
import { ArticlesService } from '../../services/articles.service';
import { RecapService } from '../../services/recap.service';
import { UserService } from '../../services/user.service';
import { NotificationsService } from '../../services/notifications.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styles: []
})
export class DashboardComponent implements OnInit {

    today: Date;
    hour: number;
    timeClass: string;
    updates = [];
    artworks = [];
    articles = [];
    userDetails: any = [];
    notifications: any = [];
    videoRecap: SafeResourceUrl;
    videoRecapDetails: string;


    constructor(
        private _getUpdatesService: LatestUpdatesService,
        private _getArtworksService: ArtworksService,
        private _getArticlesService: ArticlesService,
        private _getRecapService: RecapService,
        private _getUserService: UserService,
        private _getNotificationsService: NotificationsService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        this.getTime();
        this.GetUpdates();
        this.GetArtworks();
        this.GetArticles();
        this.GetRecap();
        this.getUserDetails();
        this.getNotifications();
    }


    artworkSlideConfig = {
        'slidesToShow': 4,
        'slidesToScroll': 2,
        'dots': false,
        'arrows': true,
        'responsive': [{
                'breakpoint': 1024,
                'settings': {
                    'slidesToShow': 3,
                    'slidesToScroll': 3,
                    'infinite': true,
                }
            },
            {
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
                    'slidesToScroll': 1
                }
            }
        ]
    };
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

    getUserDetails() {
      this._getUserService.GetUser().subscribe(
            (data) => {
                this.userDetails = data.userDetails;
            }
        );
  }

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
    GetArtworks() {
        this._getArtworksService.GetArtworks().subscribe(
            (data) => {
                this.artworks = data.artworks;
            }
        );
    }
    GetArticles() {
        this._getArticlesService.GetArticles().subscribe(
            (data) => {
                this.articles = data.articles;
            }
        );
    }
    GetRecap() {
        this._getRecapService.GetRecap().subscribe(
            (data) => {
                // this.videoRecap = data.recap.videoUrl;
                this.videoRecap = this.sanitizer.bypassSecurityTrustResourceUrl(data.recap.videoUrl);

                this.videoRecapDetails = data.recap.content;
            }
        );
    }
    getNotifications() {
        this._getNotificationsService.GetNotifications().subscribe(
            (data) => {
                this.notifications = data.notifications;
            }
        );
    }

}