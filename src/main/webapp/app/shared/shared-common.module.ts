import { NgModule } from '@angular/core';

import { MonAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MonAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MonAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MonAppSharedCommonModule {}
