// Core lib
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third party libs
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

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
import { ContentfulService } from './blog/services/contentful.service';
import { PostsComponent } from './blog/components/posts/posts.component';
import { PostComponent } from './blog/components/post/post.component';
import { MdToHtmlPipe } from './utils/markdown-to-html/md-to-html.pipe';


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
    PostsComponent,
    PostComponent,
    MdToHtmlPipe,
  ],
  imports: [
    Ng2PageScrollModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GalleryModule.forRoot(),
    GallerizeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    AngularFontAwesomeModule,
    BrowserModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
