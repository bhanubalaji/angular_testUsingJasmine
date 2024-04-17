import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let app: AppComponent;
  let httpService: jasmine.SpyObj<HttpService>;

  beforeEach(async () => {
    httpService = jasmine.createSpyObj('HttpService', ['exampleService']);
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: HttpService, useValue: httpService } // Provide the spy object for HttpService
      ]
    }).compileComponents();
      app = TestBed.createComponent(AppComponent).componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testPrac'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testPrac');
  });
  it(`should have to multiply`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.multiply(2, 3);
    expect(result).toBe(6);
  });

  it(`should call the exampleService method of HttpService`, () => {
    app.callService();
    expect(httpService.exampleService).toHaveBeenCalled();
  });


});
