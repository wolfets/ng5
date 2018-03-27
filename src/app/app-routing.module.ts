import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeAngularComponent} from './home-angular/home-angular.component';
import {GalleryComponent} from './gallery/gallery.component';

const routes: Routes = [

    { path: 'home', component: HomeAngularComponent },
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'hero/:id',      component: HeroDetailComponent },
    { path: 'gallery',      component: GalleryComponent },
    {
        path: 'heroes',
        component: HeroListComponent,
        data: { title: 'Heroes List' }
    },
    { path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
