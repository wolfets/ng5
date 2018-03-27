import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BoutonComponent } from './bouton/bouton.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeAngularComponent } from './home-angular/home-angular.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import {FormsModule} from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    BoutonComponent,
    CrisisListComponent,
    HeroDetailComponent,
    HeroListComponent,
    PageNotFoundComponent,
    HomeAngularComponent,
    HeroFormComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
