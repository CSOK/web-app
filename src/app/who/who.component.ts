import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private stats = {
    "members" : 300,
    "events" : 99,
    "sponsors" : 21
  };
}
