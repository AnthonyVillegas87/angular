import { Component, Input } from '@angular/core';
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required:true }) userId!: string;
  @Input({ required:true }) name?: string;


  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: '.NET 8 Migration',
      summary: 'Update FMIS app with appropriate package builds',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'MAP 2027 updates',
      summary: 'Implement new requirements for next FY',
      dueDate: '2025-09-30'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'UAP Buildout',
      summary: 'UAP mvp for Energy Project',
      dueDate: '2025-11-18'
    }
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
