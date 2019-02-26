import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NewsPanelComponent } from './components/news-panel/news-panel.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsEditComponent } from './pages/news-edit/news-edit.component';
import { NewsViewComponent } from './pages/news-view/news-view.component';

import { CutPipe } from './pipes/cut'

export default {
  declarations: <Array<any>>[
    MainComponent,
    NewsListComponent,
    NewsItemComponent,
    HeaderComponent,
    FooterComponent,
    NewsPanelComponent,
    NewsPanelComponent,
    LoginComponent,
    NewsComponent,
    NewsEditComponent,
    NewsViewComponent,
    CutPipe,
  ],
  imports: [ 
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
}