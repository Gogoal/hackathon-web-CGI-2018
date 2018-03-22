import {NgModule} from '@angular/core';
import {NewsRoutingModule} from './news-routing.module';
import {NewsComponent} from './news.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './component/list/list.component';
import { DetailComponent } from './component/detail/detail.component';


@NgModule({
    imports: [
        NewsRoutingModule,
        SharedModule
    ],
    declarations: [
        NewsComponent,
        ListComponent,
        DetailComponent
    ],
    exports: [
      NewsComponent
    ]

})
export class NewsModule {
}


