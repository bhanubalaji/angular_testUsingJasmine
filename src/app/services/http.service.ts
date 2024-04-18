import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  data:any = { message: 'Hello World' };
  constructor(private http: HttpClient) {}
  exampleService() {
    console.log('okk')
    return of(this.data); // Returning an observable of the data
  }
  exampleService1() {
    return of(this.data); 
  }
  
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
  updatePost(post: any) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/post/${post.id}`,
      post
    );
  }
}
