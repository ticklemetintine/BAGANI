import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { FooterComponent } from './components/footer/footer.component';
import { SansinukobMapComponent } from './components/sansinukob-map/sansinukob-map.component';
import { PaguuriResultsComponent } from './components/paguuri-results/paguuri-results.component';
import { BannerAdComponent } from './components/banner-ad/banner-ad.component';
import { EmailConfirmedComponent } from './components/email-confirmed/email-confirmed.component';
import { TopNavSocialLoginComponent } from './components/top-nav-social-login/top-nav-social-login.component';
import { PaguuriComponent } from './components/paguuri/paguuri.component';
import { LoginComponent } from './components/login/login.component';
import { PaguuriQuestionsComponent } from './components/paguuri-questions/paguuri-questions.component';
import { QuestionsService } from './services/questions.service';

@NgModule({
  declarations: [
    AppComponent,
    UnregisteredComponent,
    FooterComponent,
    SansinukobMapComponent,
    PaguuriResultsComponent,
    BannerAdComponent,
    EmailConfirmedComponent,
    TopNavSocialLoginComponent,
    PaguuriComponent,
    LoginComponent,
    PaguuriQuestionsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: UnregisteredComponent, pathMatch: 'full'},
      { path: 'login', component: LoginComponent, pathMatch: 'full'},
      { path: 'paguuri', component: PaguuriComponent, pathMatch: 'full'},
      { path: 'paguuri/:id', component: PaguuriQuestionsComponent, pathMatch: 'full'},
      { path: 'paguuri-results', component: PaguuriResultsComponent, pathMatch: 'full'},
      { path: 'email-confirmed', component: EmailConfirmedComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    HttpClientModule,
    SlickModule,
    BrowserAnimationsModule
  ],
  providers: [
    MapsService,
    LatestUpdatesService,
    ArtworksService,
    ArticlesService,
    AngAlamatService,
    MythicalCreaturesService,
    RecapService,
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
