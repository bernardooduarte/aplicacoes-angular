import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../model/todo.type';
import { catchError } from 'rxjs/operators';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');
  ngOnInit(): void {
    this.todoService
    .getTodosFromApi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }

  updateTodoItem(todoItem: Todo){
    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if(todo.id === todoItem.id){
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    })
  }
}
