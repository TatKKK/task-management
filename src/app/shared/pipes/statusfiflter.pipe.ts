import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../../todo/models/todo.model';

@Pipe({
  name: 'statusfiflter',
  pure:false
})
export class StatusfilterPipe implements PipeTransform {

  transform(value: TodoItem[], isCompleted:boolean): TodoItem[] {
    return value.filter((item)=>item.isCompleted === isCompleted)
  }

}
