import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    PipesModule,
    CommonModule,
    TranslateModule.forChild()
  ],
  exports: [TranslateModule,
    PipesModule,
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }
