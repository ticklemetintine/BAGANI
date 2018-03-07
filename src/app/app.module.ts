import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { UnregisteredComponent } from './components/unregistered/unregistered.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { MapsService } from './services/maps.service';

import { SlickModule } from 'ngx-slick';
import { LatestUpdatesService } from './services/latest-updates.service';
import { ArtworksService } from './services/artworks.service';
import { ArticlesService } from './services/articles.service';
import { AngAlamatService } from './services/ang-alamat.service';
import { MythicalCreaturesService } from './services/mythical-creatures.service';
import { RecapService } from './services/recap.service';
import { Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: UnregisteredComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UnregisteredComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: UnregisteredComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    HttpModule,
    SlickModule
  ],
  providers: [MapsService, LatestUpdatesService, ArtworksService, ArticlesService, AngAlamatService, MythicalCreaturesService, RecapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
