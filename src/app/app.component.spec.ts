import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardCheckerComponent } from 'src/app/card-checker.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Luhn Check Page');
  }));
});

describe('CardCheckerComponent', () => {
  it('should accept input', async(() => {
    const fixture = TestBed.createComponent(CardCheckerComponent);
    
  }));

  it('should pass input to service', async(() => {
    const fixture = TestBed.createComponent(CardCheckerComponent);

  }));

  it('should receive results from service', async(() => {
    const fixture = TestBed.createComponent(CardCheckerComponent);

  }));
});
