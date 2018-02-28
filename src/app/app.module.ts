// Core lib
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//third party libs
import { GalleryModule } from '@ngx-gallery/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Custom modules
import { AppRoutes } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { StoriesComponent } from './stories/stories.component';
import { PicturesComponent } from './pictures/pictures.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryComponent } from './who/history/history.component';
import { LeadersComponent } from './who/leaders/leaders.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoComponent,
    WhatComponent,
    StoriesComponent,
    PicturesComponent,
    NavbarComponent,
    FooterComponent,
    HistoryComponent,
    LeadersComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    ReactiveFormsModule,
    GalleryModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    AngularFontAwesomeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
