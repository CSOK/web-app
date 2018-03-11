import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getPosts() {
    const promise = this.client.getEntries();
    return Observable.fromPromise(promise).map(entry => entry);
  }

  getPost(contentId: string) {
    const promise = this.client.getEntry(contentId);
    return Observable.fromPromise(promise).map(entry => entry);
  }

}
