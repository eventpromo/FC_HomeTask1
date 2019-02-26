import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import testModuleMetadata from '../../test.config';
import AuthService from '../../services/AuthService';
import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      ...testModuleMetadata,
      providers: [
        AuthService,
      ], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
