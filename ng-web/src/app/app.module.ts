import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NewsControlPanelComponent } from './components/news-control-panel/news-control-panel.component';
import { ButtonComponent } from './components/button/button.component';
import { NewsMoreButtonComponent } from './components/news-more-button/news-more-button.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsEditComponent } from './pages/news-edit/news-edit.component';
import { NewsViewComponent } from './pages/news-view/news-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsItemComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NewsControlPanelComponent,
    ButtonComponent,
    NewsMoreButtonComponent,
    NewsComponent,
    NewsEditComponent,
    NewsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
