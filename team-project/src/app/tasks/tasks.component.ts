import { Component, Input } from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import { type NewTaskData} from "./task/task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required:true }) userId!: string;
  @Input({ required:true }) name?: string;
  isNewTask = false;



  get selectedUserTasks() {
    return
  }

  onCompletedTask(id: string) {
  }

  onNewTask() {
    this.isNewTask = true;
  }

  onCloseNewTask() {
    this.isNewTask = false;
  }

  onCreateTask(taskData: NewTaskData) {

    this.isNewTask = false;
  }
}
