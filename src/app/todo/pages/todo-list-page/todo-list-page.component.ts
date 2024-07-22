import { Component } from '@angular/core';
import { TodoItem } from '../../models/todo.model';


@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrl: './todo-list-page.component.css'
})
export class TodoListPageComponent {
  todoList:TodoItem[]=[];

  onAddTodo(item:TodoItem){
    this.todoList=[...this.todoList, item]
   }
  
   onToggleComplete(changedItem:TodoItem){
    this.todoList = this.todoList.map((item)=> changedItem.id === item.id ? {...item,isCompleted:!changedItem.isCompleted}:item)
   }

}
