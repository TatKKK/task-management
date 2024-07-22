import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoItem } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrl: './todo-list-page.component.css'
})
export class TodoListPageComponent implements OnInit {

  todoList:TodoItem[]=[];
  ngOnInit(): void {
    this.getTodos();
  }

  constructor(
    private todoService:TodoService
  ){

  }
 
  onAddTodo(item:TodoItem){
    this.todoService.addTodo(item).subscribe(()=>{
      // this.getTodos();
    });
  }

onToggleComplete(changedItem:TodoItem){
  this.todoService.toggleComplete(changedItem);
}

private getTodos(){
  this.todoService.getTodos().subscribe((todoList) =>{
    this.todoList=todoList
  })
}
}
