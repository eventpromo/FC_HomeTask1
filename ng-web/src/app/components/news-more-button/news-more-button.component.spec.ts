import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMoreButtonComponent } from './news-more-button.component';

describe('NewsMoreButtonComponent', () => {
  let component: NewsMoreButtonComponent;
  let fixture: ComponentFixture<NewsMoreButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMoreButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
