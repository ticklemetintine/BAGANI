import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tour',
    templateUrl: 'tour.component.html',
    styles: []
})
export class TourComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    tourSlideConfig = {
        'slidesToShow': 1,
        'slidesToScroll': 1,
        'dots': true,
        'arrows': false,
        'infinite': false
    };

}
