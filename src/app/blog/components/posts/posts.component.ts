import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contentful.getPosts().subscribe(content => {
      this.posts = content.items;
    });
  }

}
