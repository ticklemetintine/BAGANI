import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-ad',
  templateUrl: 'banner-ad.component.html',
  styles: []
})
export class BannerAdComponent implements OnInit {
    showAd = true;

    constructor() { }

    ngOnInit() {
    }

    closeAd() {
        this.showAd = false;
    }

}
