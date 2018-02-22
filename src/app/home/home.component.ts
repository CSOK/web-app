import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  activities: string[] = [
    'Tech-talks',
    'Meetups',
    'Trainings',
    'Hack-a-thons',
    'Social Activities'
  ];

  stories = [
    { thumbnail: "assets/img/stories-1.jpg", author: "Marvin Ngesa", dateWritten: "25 Oct", title: "Internet of Things", content: "IoT is the next big thing in this century. It has support from Intel, Samsung ..." },
    { thumbnail: "assets/img/stories-1.jpg", author: "Marvin Ngesa", dateWritten: "25 Oct", title: "Internet of Things", content: "IoT is the next big thing in this century. It has support from Intel, Samsung ..." },
    { thumbnail: "assets/img/stories-1.jpg", author: "Marvin Ngesa", dateWritten: "25 Oct", title: "Internet of Things", content: "IoT is the next big thing in this century. It has support from Intel, Samsung ..." },
    { thumbnail: "assets/img/stories-1.jpg", author: "Marvin Ngesa", dateWritten: "25 Oct", title: "Internet of Things", content: "IoT is the next big thing in this century. It has support from Intel, Samsung ..." },
  ];

  images = [
    "assets/img/pictures-1.jpg",
    "assets/img/pictures-2.jpg",
    "assets/img/pictures-3.jpg",
    "assets/img/pictures-4.jpg",
  ]

  ngOnInit() {
  }

}
