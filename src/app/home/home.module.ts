import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CatModalComponent } from './component/catModal/catModal.component';

@NgModule({
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        CatModalComponent
    ],
    exports: [
      HomeComponent
    ],
    entryComponents: [
        CatModalComponent
      ],

})
export class HomeModule {
}


