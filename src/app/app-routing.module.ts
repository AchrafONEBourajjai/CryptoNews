import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'news-list', loadChildren: './news-list/news-list.module#NewsListPageModule' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  { path: 'article-news', loadChildren: './pages/article-news/article-news.module#ArticleNewsPageModule' },
  { path: 'tab5', loadChildren: './pages/tab5/tab5.module#Tab5PageModule' },
  { path: 'model-premium', loadChildren: './pages/model-premium/model-premium.module#ModelPremiumPageModule' },
  { path: 'model-settings', loadChildren: './pages/model-settings/model-settings.module#ModelSettingsPageModule' },
  { path: 'calculatrice', loadChildren: './page/calculatrice/calculatrice.module#CalculatricePageModule' },
  { path: 'modal-calcule', loadChildren: './pages/modal-calcule/modal-calcule.module#ModalCalculePageModule' },
  { path: 'credits', loadChildren: './pages/credits/credits.module#CreditsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
