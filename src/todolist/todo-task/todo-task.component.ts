import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  standalone: true,
  imports: [],
  templateUrl: './todo-task.component.html',
  styleUrl: './todo-task.component.css'
})
export class TodoTaskComponent {

  @Output() removetask = new EventEmitter();
  @Input() tasklist : any;

  removeToDo(id: number): void {
  this.removetask.emit(id);
  }

}
