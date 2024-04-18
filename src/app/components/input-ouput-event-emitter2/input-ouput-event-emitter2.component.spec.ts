import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOuputEventEmitter2Component } from './input-ouput-event-emitter2.component';
import { HttpClientModule } from '@angular/common/http';

describe('InputOuputEventEmitter2Component', () => {
  let component: InputOuputEventEmitter2Component;
  let fixture: ComponentFixture<InputOuputEventEmitter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ InputOuputEventEmitter2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOuputEventEmitter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
