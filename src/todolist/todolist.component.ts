import { Component } from '@angular/core';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { FilterTaskComponent } from './filter-task/filter-task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [TodoTaskComponent,FilterTaskComponent,AddTaskComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  count : number = 1;
  inccount():number{
    return this.count++;
  }

  tasks = [
    {
      id: this.inccount(),
      tdesc: 'come to office',
      priority: 1,
      status: 'Completed',
    },
    {
      id: this.inccount(),
      tdesc: 'attend angular class',
      priority: 2,
      status: 'InProgress',
    },
    {
      id: this.inccount(),
      tdesc: 'go home',
      priority: 3,
      status: 'ToDo',
    },
  ];

  removeToDo(id: any): void {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }

  addToDo(task: any): void {
    task.id = this.inccount();
    this.tasks.push(task);
  }

  filterByPriority(priority: any) {
    this.tasks = this.tasks.filter((task) => task.priority == priority);
  }
}
