import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsControlPanelComponent } from './news-control-panel.component';

describe('NewsControlPanelComponent', () => {
  let component: NewsControlPanelComponent;
  let fixture: ComponentFixture<NewsControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
