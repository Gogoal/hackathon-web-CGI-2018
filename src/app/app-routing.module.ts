import {NgModule} from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Resolve } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BaseDataResolver } from './core/service/baseDataResolver';

export const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      baseData: BaseDataResolver
    }
  },
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule',
    resolve: {
      baseData: BaseDataResolver
    }
  },
  {path: 'news', loadChildren: 'app/news/news.module#NewsModule',
    resolve: {
      baseData: BaseDataResolver
    }
  },
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  providers: [ BaseDataResolver ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

