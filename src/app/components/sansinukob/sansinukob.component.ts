import { Component, OnInit } from '@angular/core';

import { MapsService } from '../../services/maps.service';
import { AngAlamatService } from '../../services/ang-alamat.service';
import { MythicalCreaturesService } from '../../services/mythical-creatures.service';

@Component({
    selector: 'app-sansinukob',
    templateUrl: 'sansinukob.component.html'
})
export class SansinukobComponent implements OnInit {
    maps = [];
    alamat = [];
    creatures = [];
    modalCreatureData:any = [];
    showModalCreature:boolean = false;

    constructor(
        private _mapService: MapsService,
        private _getAngAlamatService: AngAlamatService,
        private _getMythicalCreaturesService: MythicalCreaturesService
    ) {}

    ngOnInit() {
        this.EachMap();
        this.GetAlamat();
        this.GetCreatures();
    }

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
                    'centerPadding': '60px',
                }
            }
        ]
    };


    EachMap() {
        this._mapService.EachMap().subscribe(
            (data) => {
                this.maps = data.maps;
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
    creatureModal(creature) {
      this.showModalCreature = true;
      this.modalCreatureData = creature;
    }

    closeModal() {
      this.showModalCreature = false;
    }
}