import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
import { SansinukobComponent } from './components/sansinukob/sansinukob.component';
import { TourComponent } from './components/tour/tour.component';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from './services/user.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';

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
    PaguuriQuestionsComponent,
    SansinukobComponent,
    TourComponent,
    HeaderComponent,
    SidebarComponent
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
      { path: 'tour', component: TourComponent, pathMatch: 'full'},
      { path: 'wikia', component: SansinukobComponent, pathMatch: 'full'},
      { path: 'sidebar', component: SidebarComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    HttpClientModule,
    SlickModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    MapsService,
    LatestUpdatesService,
    ArtworksService,
    ArticlesService,
    AngAlamatService,
    MythicalCreaturesService,
    RecapService,
    QuestionsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
