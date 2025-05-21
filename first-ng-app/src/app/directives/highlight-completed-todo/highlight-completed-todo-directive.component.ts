// highlight-completed-todo.directive.ts
import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective implements OnChanges {
  @Input() isCompleted: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.isCompleted) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#6c757d';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  }
}