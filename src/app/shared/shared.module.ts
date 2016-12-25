import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BlogFooterComponent } from './blog-footer';
import { BlogHeaderComponent } from './blog-header';
import { DropdownDirective } from './dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    BlogFooterComponent,
    BlogHeaderComponent,
    DropdownDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    BlogFooterComponent,
    BlogHeaderComponent,
    DropdownDirective,
  ]
})
export class SharedModule {

}
