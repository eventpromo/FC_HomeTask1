import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import testModuleMetadata from '../../test.config';
import AuthService from '../../services/AuthService';
import { NewsPanelComponent } from './news-panel.component';

describe('NewsPanelComponent', () => {
  let component: NewsPanelComponent;
  let fixture: ComponentFixture<NewsPanelComponent>;

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
    fixture = TestBed.createComponent(NewsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
