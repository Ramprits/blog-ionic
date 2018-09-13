import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostRepository } from './post.repository';
import { PostModel } from '@app/model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService extends PostRepository<PostModel, string> {
  constructor(http: HttpClient) {
    super(http);
  }
}
