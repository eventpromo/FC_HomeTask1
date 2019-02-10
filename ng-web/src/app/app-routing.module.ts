import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { NewsEditComponent } from './pages/news-edit/news-edit.component';
import { NewsViewComponent } from './pages/news-view/news-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news/:id/edit', component: NewsEditComponent },
  { path: 'news/:id', component: NewsViewComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
