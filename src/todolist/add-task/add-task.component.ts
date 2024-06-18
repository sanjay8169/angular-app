import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() add = new EventEmitter();

  tdesc : string = "";
  status : string = "";
  priority : string = "";

  priorityoption : number[] = [1,2,3];
  statusoption : string[] = ["ToDo","InProgress","Completed"];  

  addtask():void{
    let task : any = {tdesc : this.tdesc,priority : this.priority,status : this.status}
    this.add.emit(task);
  }
}
