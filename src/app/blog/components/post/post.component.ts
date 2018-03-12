import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContentfulService } from '../../services/contentful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any;
  params: any;

  constructor(private activatedRoute: ActivatedRoute,
    private contentful: ContentfulService) { }

  ngOnInit() {
    // Get default state from url
    this.activatedRoute.params.subscribe(params => this.params = params);

    if (this.params.hasOwnProperty('id')) {
      this.contentful.getPost(this.params.id).subscribe(content => {
        this.post = content;
      });
    }

  }

}
