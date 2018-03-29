import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Http} from '@angular/http';
import {Subscription} from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	loading:string = "loading";

	constructor(
		private router: Router,
	) { }

	ngOnInit() {
		this.router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) {
				return;
			}
			window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
		});
	}
	ngAfterContentInit() {
	    setTimeout(() => {
	    	this.loading = "loaded";
			console.log(this.loading);
	        
	    }, 1000);
	}
}
