import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NewsComponent } from './news.component';

export const ROUTES: Routes = [
    { path: '', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class NewsRoutingModule {
}

