import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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

  ngOnInit() {
  }

}
