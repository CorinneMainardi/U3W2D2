import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

// Definisci l'interfaccia per il tipo di dati del post
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  active: boolean;
}

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
})
export class ActivePostComponent implements OnInit {
  activePosts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.activePosts = this.postService.getActivePosts();
  }
}
