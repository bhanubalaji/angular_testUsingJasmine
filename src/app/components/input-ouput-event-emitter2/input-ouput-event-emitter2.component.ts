import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-input-ouput-event-emitter2',
  templateUrl: './input-ouput-event-emitter2.component.html',
  styleUrls: ['./input-ouput-event-emitter2.component.scss']
})
export class InputOuputEventEmitter2Component {
  posts: any[] = [];
  constructor(private postService:HttpService ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  delete(post: any) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
    this.postService.deletePost(post).subscribe();
  }
}
