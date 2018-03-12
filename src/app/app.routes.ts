import { SignupComponent } from './auth/signup/signup.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { HistoryComponent } from './who/history/history.component';
import { LeadersComponent } from './who/leaders/leaders.component';
import { WhatComponent } from './what/what.component';
import { StoriesComponent } from './stories/stories.component';
import { PicturesComponent } from './pictures/pictures.component';
import { LoginComponent } from './auth/login/login.component';
import { PostsComponent } from './blog/components/posts/posts.component';
import { PostComponent } from './blog/components/post/post.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'who', component: WhoComponent },
    { path: 'who/history', component: HistoryComponent },
    { path: 'who/leaders', component: LeadersComponent },
    { path: 'what', component: WhatComponent },
    { path: 'stories', component: StoriesComponent },
    {
        path: 'blog',
        children: [
            { path: '', component: PostsComponent },
            { path: ':id', component: PostComponent }
        ]
    },
    { path: 'pictures', component: PicturesComponent },
    { path: '**', redirectTo: '' }
];
