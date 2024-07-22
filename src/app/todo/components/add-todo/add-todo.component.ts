import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {
  todoItemName='';
  idCounter=0;

  @Output() addTodo=new EventEmitter<TodoItem>();
  
  ngOnInit(): void {    
  }

  constructor(){
  }

  onSubmit(){
    this.addTodo.emit({
      id:this.idCounter,
      title:this.todoItemName,
      isCompleted:false
    });

    this.idCounter++;
    this.todoItemName='';
    console.log(this.todoItemName, this.idCounter)
  }

}
