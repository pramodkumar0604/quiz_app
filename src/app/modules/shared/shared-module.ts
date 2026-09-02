import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../../../DemoNgZorroAntdModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule
  ]
})
export class SharedModule { }