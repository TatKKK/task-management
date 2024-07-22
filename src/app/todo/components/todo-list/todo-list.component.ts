import { Component,  EventEmitter,  Input, Output } from '@angular/core';
import { TodoItem } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todoList:TodoItem[]=[];
  @Output() toggleComplete = new EventEmitter();  

  constructor(){}
 

  onToggleComplete(item:TodoItem){
    this.toggleComplete.emit(item);    
  }

  

}
