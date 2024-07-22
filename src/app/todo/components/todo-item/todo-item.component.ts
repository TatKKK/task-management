import { Component, EventEmitter, Input,Output } from '@angular/core';
import { TodoItem } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() item:TodoItem | null = null;
  @Output() toggleComplete = new EventEmitter();

  constructor(){}

  ngOnInit():void{

  }

  onToggleComplete(){
    this.toggleComplete.emit();
  }

}
