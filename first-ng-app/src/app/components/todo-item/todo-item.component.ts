// todo-item.component.ts
import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo/highlight-completed-todo-directive.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'] // Corrigido aqui
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked(){
    this.todoToggled.emit(this.todo());
  }
}