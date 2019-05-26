import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MonAppSharedLibsModule, MonAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MonAppSharedLibsModule, MonAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MonAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonAppSharedModule {
  static forRoot() {
    return {
      ngModule: MonAppSharedModule
    };
  }
}
