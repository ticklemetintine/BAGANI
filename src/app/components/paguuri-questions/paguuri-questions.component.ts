import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { QuestionsService } from '../../services/questions.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'app-paguuri-questions',
    templateUrl: 'paguuri-questions.component.html',
    styles: []
})
export class PaguuriQuestionsComponent implements OnInit {
    questions = [];
    router;

    constructor(
        private _getQuestionsService: QuestionsService,
        private sanitizer: DomSanitizer,
        private location: Location,
        private _router: Router
    ) {
        this.router = _router;
    }

    ngOnInit() {
        this.getQuestions();
    }

    questionsSlideConfig = {
        'slidesToShow': 1,
        'slidesToScroll': 1,
        'dots': true,
        'arrows': false,
        'infinite': false
    };

    getQuestions() {
        this._getQuestionsService.GetQuestions().subscribe(
            (data) => {
                this.questions = data.questionSet;
            }
        );
    }
    afterChange(event) {
        console.log(event.currentSlide);
        this.location.replaceState('/paguuri/q2');
    }
    next() {
        console.log('next');
    }
}
