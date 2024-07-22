import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { StatusfilterPipe } from './pipes/statusfiflter.pipe';
import { MagnifierDirective } from './directives/magnifier.directive';


@NgModule({
  declarations: [
    HighlightDirective,
    MagnifierDirective,
    StatusfilterPipe
  ],
  exports:[
    HighlightDirective,
    MagnifierDirective,
    StatusfilterPipe,
   
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
