import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  post!: Post;
  constructor(
    private route: ActivatedRoute,
    private httpservice: HttpService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.httpservice.getPost(+id).subscribe((post) => (this.post = post));
  }

  goBack() {
    this.location.back()
  }

  save() {
    this.httpservice.updatePost(this.post).subscribe(() => this.goBack());
  }
}
