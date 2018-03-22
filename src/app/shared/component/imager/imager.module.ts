import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagerComponent } from './imager.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ImagerComponent
    ],
    exports:      [
      ImagerComponent
    ]
})

export class ImagerModule {
}

