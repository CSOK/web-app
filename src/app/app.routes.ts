import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { StoriesComponent } from './stories/stories.component';
import { PicturesComponent } from './pictures/pictures.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'who', component: WhoComponent },
    { path: 'what', component: WhatComponent },
    { path: 'stories', component: StoriesComponent },
    { path: 'pictures', component: PicturesComponent },
    { path: '**', redirectTo: '' }
];
