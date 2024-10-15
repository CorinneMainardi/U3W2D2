import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  active: boolean;
}

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
})
export class InactivePostComponent implements OnInit {
  inactivePosts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.inactivePosts = this.postService.getInactivePosts();
  }
}
