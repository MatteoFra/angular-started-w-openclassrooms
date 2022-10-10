import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { pipeBirth } from './pipes/pipeBirth';
import { HighlightDirective } from './directives/highligth.directive';

@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe,
    pipeBirth,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe,
    pipeBirth,
    HighlightDirective
  ]
})
export class SharedModule { }