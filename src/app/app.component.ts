import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { TodoItem } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'task-management';

 todoList:TodoItem[]=[];

 constructor(){}

 onAddTodo(item:TodoItem){
  this.todoList=[...this.todoList, item]
 }

 onToggleComplete(changedItem:TodoItem){
  this.todoList = this.todoList.map((item)=> changedItem.id === item.id ? {...item,isCompleted:!changedItem.isCompleted}:item)
 }
}
