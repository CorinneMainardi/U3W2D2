import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { Ipost } from '../../modules/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Ipost[] = [];
  tags: string[] = [];
  filteredPosts: Ipost[] = [];
  selectedTag!: string;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.tags = this.postService.getTags();
    this.filteredPosts = this.posts;
  }

  filterByTag(tag: string) {
    this.selectedTag = tag;
    this.filteredPosts = this.postService.getPostsByTag(tag);
  }
}
