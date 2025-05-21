import { Component, input, effect, ElementRef, inject} from '@angular/core';

@Component({
  selector: 'app-highlight-completed-todo',
  imports: [],
  templateUrl: './highlight-completed-todo.component.html',
  styleUrl: './highlight-completed-todo.component.css'
})
export class HighlightCompletedTodoComponent {
  isCompleted = input(false);
  el = inject(ElementRef);
  stylesEffect = effect(() => {
    const nativeEl: HTMLElement = this.el.nativeElement;
    if (this.isCompleted()) {
      nativeEl.style.setProperty('text-decoration', 'line-through');
      this.el.nativeElement.style.color = '#6c757d';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  })
}