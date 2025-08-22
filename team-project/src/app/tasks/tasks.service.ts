import {type NewTaskData } from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
private tasks = [
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
  getUsersTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

}
