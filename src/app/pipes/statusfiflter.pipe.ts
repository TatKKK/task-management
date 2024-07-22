import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../models/todo.model';

@Pipe({
  name: 'statusfiflter',
  pure:false
})
export class StatusfiflterPipe implements PipeTransform {

  transform(value: TodoItem[], isCompleted:boolean): TodoItem[] {
    return value.filter((item)=>item.isCompleted === isCompleted)
  }

}
