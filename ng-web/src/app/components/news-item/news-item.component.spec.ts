import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import testModuleMetadata from '../../test.config';
import { NewsItemComponent } from './news-item.component';
import NewsItem from 'src/app/models/NewsItem';

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;

  beforeEach(async(() => {
    testModuleMetadata.declarations.push(TestComponentWrapper);
    TestBed.configureTestingModule(testModuleMetadata)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'test-component-wrapper',
  template: '<app-news-item [model]="item"></app-news-item>'
})
class TestComponentWrapper {
  item = new NewsItem();
}