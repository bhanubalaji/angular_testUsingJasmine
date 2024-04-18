import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PostDetailsComponent } from './post-details.component';
import { HttpService } from 'src/app/services/http.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('PostDetailsComponent', () => {
  let fixture: ComponentFixture<PostDetailsComponent>;
  let mockPostService:any
  beforeEach(() => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3';
          },
        },
      },
    };

    mockPostService = jasmine.createSpyObj(['getPost', 'updatePost']);
    let mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      declarations: [PostDetailsComponent],
      imports: [FormsModule],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: HttpService, useValue: mockPostService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });

    fixture = TestBed.createComponent(PostDetailsComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render post title in template', () => {
      mockPostService.getPost.and.returnValue(of({ id: 1, body: 'body 1', title: 'title 1' }));
      fixture.detectChanges();
   let element = fixture.nativeElement.querySelector('h1') as HTMLElement
      expect(element.textContent).toBe(fixture.componentInstance.post.title);
  });
});