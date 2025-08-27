import { Component, Input } from '@angular/core';

import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({ required:true }) userId!: string;
  @Input({ required:true }) name?: string;
  isNewTask = false;

  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }



  get selectedUserTasks() {
    return this.tasksService.getUsersTasks(this.userId);
  }

  onNewTask() {
    this.isNewTask = true;
  }

  onCloseNewTask() {
    this.isNewTask = false;
  }

}
