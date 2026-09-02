import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  exports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule
  ]
})
export class DemoNgZorroAntdModule { }