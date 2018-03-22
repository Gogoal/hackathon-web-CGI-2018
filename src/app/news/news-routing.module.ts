import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NewsComponent } from './news.component';
import { ListComponent } from './component/list/list.component';
import { DetailComponent } from './component/detail/detail.component';

export const ROUTES: Routes = [
    { path: '', component: NewsComponent,
        children: [
            { path: '', component: ListComponent },
            { path: ':rubrique', redirectTo: ':rubrique/0', pathMatch: 'full' },
            { path: ':rubrique/:id', component: DetailComponent },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class NewsRoutingModule {
}

