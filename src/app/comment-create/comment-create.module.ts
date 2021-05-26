import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentCreateComponent } from './comment-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CommentCreateComponent],
  exports: [CommentCreateComponent]
})
export class CommentCreateModule { }
