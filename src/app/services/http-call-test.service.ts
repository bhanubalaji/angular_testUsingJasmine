import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCallTestService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  deletePost(post: any) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/post/${post.id}`
    );
  }
  getPost(postId: number) {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
}
