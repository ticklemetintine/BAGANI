import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { UserService } from '../../services/user.service';
import { WikiaTableOfContentsService } from '../../services/wikia-table-of-contents.service';

@Component({
  selector: 'app-wikia-table-of-contents',
  templateUrl: 'wikia-table-of-contents.component.html',
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
export class WikiaTableOfContentsComponent implements OnInit {
  showTableOfContents:boolean = false;
  userDetails: any = [];
  wikiaMenu:any = [];

  constructor(
    private _getUserService: UserService,
    private _getWikiaTableOfContentsComponent: WikiaTableOfContentsService
  ) { }

  ngOnInit() {
    this.getUserDetails();
    this.getWikiaTableOfContentsComponent();
  }

  getUserDetails() {
        this._getUserService.GetUser().subscribe(
            (data) => {
                this.userDetails = data.userDetails;
            }
        );
  }
  
  getWikiaTableOfContentsComponent() {
        this._getWikiaTableOfContentsComponent.GetMenu().subscribe(
            (data) => {
                this.wikiaMenu = data.wikiaMenu;
            }
        );
  }

  openTableOfContents() {
    this.showTableOfContents = true;
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  closeTableOfContents() {
    this.showTableOfContents = false;
  }

}
