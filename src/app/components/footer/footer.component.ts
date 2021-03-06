import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styles: []
})
export class FooterComponent implements OnInit {
	showModalPrivacy = false;
	showModalTerms = false;

    constructor() {}

    ngOnInit() {
    }
    closeModal() {
    	this.showModalPrivacy = false;
    	this.showModalTerms = false;
    }
    modalPrivacy() {
    	this.showModalPrivacy = true;
    }
    modalTerms() {
    	this.showModalTerms = true;
    }

}
