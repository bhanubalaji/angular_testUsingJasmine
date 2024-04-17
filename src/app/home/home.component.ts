import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts: any[] = [];
  constructor(private httpservice: HttpService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.httpservice.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  delete(post: any) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
    this.httpservice.deletePost(post).subscribe();
  }
}
