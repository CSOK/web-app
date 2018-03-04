import { Component } from '@angular/core';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss']
})
export class WhatComponent  {

  constructor() { }

  events = [
    {
      thumbnail: "assets/img/what-1.jpg",
      title: "Microsoft Bootcamp",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      url: "bootcamp",
    },
    {
      thumbnail: "assets/img/what-2.jpg",
      title: "X-Fair",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      url: "bootcamp",
    },
    {
      thumbnail: "assets/img/what-3.jpg",
      title: "GDG DevFest",
      description: "GDG DEVFEST NYERI was another great success from GDG Kimathi University. It was a three-day event held from 11th November 2016",
      url: "bootcamp",
    },
    {
      thumbnail: "assets/img/what-4.jpg",
      title: "Lorem Ipsum Dor",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      url: "bootcamp",
    },
    {
      thumbnail: "assets/img/what-5.jpg",
      title: "Lorem Ipsum Dor",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      url: "bootcamp",
    },
    {
      thumbnail: "assets/img/what-6.jpg",
      title: "Lorem Ipsum Dor",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      url: "bootcamp",
    },
  ]

}
