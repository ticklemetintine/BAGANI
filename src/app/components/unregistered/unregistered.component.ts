import { Component, Input, Output, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MapsService } from '../../services/maps.service';
import { LatestUpdatesService } from '../../services/latest-updates.service';
import { ArtworksService } from '../../services/artworks.service';
import { ArticlesService } from '../../services/articles.service';
import { AngAlamatService } from '../../services/ang-alamat.service';
import { MythicalCreaturesService } from '../../services/mythical-creatures.service';
import { RecapService } from '../../services/recap.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-unregistered',
    templateUrl: './unregistered.component.html',
    animations: [
        trigger('fadeInOut', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 }))
            ]),
            transition('* => void', [
                animate(500, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class UnregisteredComponent implements OnInit {
    showMap: string;
    showPopUp: string;
    maps = [];
    updates = [];
    artworks = [];
    news_feed = [];
    articles = [];
    alamat = [];
    creatures = [];
    videoRecap: SafeResourceUrl;
    videoRecapDetails: string;
    alamatBackground: any = '';
    modalCreatureData: any = [];
    modalFanartData: any = [];
    showModalCreature = false;
    showModalFanart = false;

    alamatSlideConfig = {
        'slidesToShow': 1,
        'slidesToScroll': 1,
        'dots': true,
        'arrows': false
    };
    mythicalSlideConfig = {
        'slidesToShow': 4,
        'slidesToScroll': 1,
        'dots': true,
        'arrows': false,
        'responsive': [{
                'breakpoint': 1024,
                'settings': {
                    'slidesToShow': 3,
                    'slidesToScroll': 3,
                    'infinite': true,
                    'dots': true
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
                    'slidesToScroll': 1,
                    'centerMode': true,
                    'centerPadding': '40px',
                    'arrows': true
                }
            }
        ]
    };
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

    constructor(
        private _mapService: MapsService,
        private _getUpdatesService: LatestUpdatesService,
        private _getArtworksService: ArtworksService,
        private _getArticlesService: ArticlesService,
        private _getAngAlamatService: AngAlamatService,
        private _getMythicalCreaturesService: MythicalCreaturesService,
        private _getRecapService: RecapService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        this.EachMap();
        this.GetUpdates();
        this.GetArtworks();
        this.GetArticles();
        this.GetAlamat();
        this.GetCreatures();
        this.GetRecap();
    }


    focusMap(map) {
        this.showMap = map;
    }
    unfocusMap() {
        this.showMap = '';
    }
    showModal(map) {
        this.showPopUp = map;
    }
    closeModal() {
        this.showPopUp = '';
        this.showModalCreature = false;
        this.showModalFanart = false;
    }
    afterChange(e) {
        console.log(e);
    }
    EachMap() {
        this._mapService.EachMap().subscribe(
            (data) => {
                this.maps = data.maps;
            }
        );
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
                this.news_feed = data.news_feed.posts.post;
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
    GetAlamat() {
        this._getAngAlamatService.GetAlamat().subscribe(
            (data) => {
                this.alamat = data.angAlamat;
            }
        );
    }
    GetCreatures() {
        this._getMythicalCreaturesService.GetMythicalCreatures().subscribe(
            (data) => {
                this.creatures = data.mythicalCreatures;
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
    creatureModal(creature) {
        this.showModalCreature = true;
        this.modalCreatureData = creature;
    }
    fanartModal(fanart) {
        this.showModalFanart = true;
        this.modalFanartData = fanart;
    }

}
