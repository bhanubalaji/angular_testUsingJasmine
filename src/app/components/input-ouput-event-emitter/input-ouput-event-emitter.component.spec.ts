import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOuputEventEmitterComponent } from './input-ouput-event-emitter.component';
import { first } from 'rxjs';

describe('InputOuputEventEmitterComponent', () => {
  let component: InputOuputEventEmitterComponent;
  let fixture: ComponentFixture<InputOuputEventEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOuputEventEmitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOuputEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise an event when the delete post is clicked', () => {
    const comp = new InputOuputEventEmitterComponent();
    const post: any = { id: 1, body: 'body 1', title: 'dsdsd' };
    comp.post = post;
    comp.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    comp.onDeletePost(new MouseEvent('click'));
  });
});
