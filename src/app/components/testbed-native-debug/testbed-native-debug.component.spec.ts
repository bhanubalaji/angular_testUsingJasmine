import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { TestbedNativeDebugComponent } from './testbed-native-debug.component';

describe('testbed-native-debug Component', () => {
  let fixture: ComponentFixture<TestbedNativeDebugComponent>;
  let comp: TestbedNativeDebugComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestbedNativeDebugComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(TestbedNativeDebugComponent);
    comp = fixture.componentInstance;
  });

  it('should create post component using TestBed', () => {
    expect(comp).toBeDefined();
  });

  it('should render the post title in the anchor element', () => {
    const post: any = { id: 1, body: 'body 1', title: 'title 1' };
    comp.post = post;
    fixture.detectChanges();
    const postElement: HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title);
  });

  it('should render the post title in the anchor element using debug element', () => {
    const post: any = { id: 1, body: 'body 1', title: 'title 1' };
    comp.post = post;
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const aElement: HTMLElement = postDebugElement.query(
      By.css('a')
    ).nativeElement;
    expect(aElement.textContent).toContain(post.title);
  });

  it('should raise an event when the delete post is clicked', () => {
    const post: any = { id: 1, body: 'body 1', title: 'dsdsd' };
    comp.post = post;
    comp.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    comp.onDeletePost(new MouseEvent('click'));
  });
});