import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpCallTestService } from './http-call-test.service';

describe('HttpCallService (HttpClientTestingModule)', () => {
  let HttpCallService: HttpCallTestService;
  let httpTestingController: HttpTestingController;
  let POSTS = [
    {
      id: 1,
      body: 'body 1',
      title: 'title 1',
    },
    {
      id: 2,
      body: 'body 2',
      title: 'title 2',
    },
    {
      id: 3,
      body: 'body 3',
      title: 'title 3',
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCallTestService],
      imports: [HttpClientTestingModule],
    });

    HttpCallService = TestBed.inject(HttpCallTestService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
// http test using httpTestingController with mock simulation call
  describe('getPosts()', () => {
    it('should return posts when getPosts() is called', (done: DoneFn) => {
      HttpCallService.getPosts().subscribe((data) => {
        expect(data).toEqual(POSTS);
        done();
      });
      const request = httpTestingController.expectOne(
        'https://jsonplaceholder.typicode.com/posts'
      );
      request.flush(POSTS);
      expect(request.request.method).toBe('GET');
    });
  });



  describe('getPost()', () => {
    it('should return single post when getpost is called with postId', () => {
      HttpCallService.getPost(1).subscribe();

      const request = httpTestingController.expectOne(
        `https://jsonplaceholder.typicode.com/posts/1`
      );

      expect(request.request.method).toBe('GET');
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});