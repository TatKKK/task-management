import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MagnifierDirective } from './directives/magnifier.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { StatusfiflterPipe } from './pipes/statusfiflter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoItemComponent,
    TodoListComponent,
    MagnifierDirective,
    HighlightDirective,
    StatusfiflterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
