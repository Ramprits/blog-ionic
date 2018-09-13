import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedExport } from '@app/shared';

@NgModule({
  exports: [...SharedExport]
})
export class SharedModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: SharedModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
