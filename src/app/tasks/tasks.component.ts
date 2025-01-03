import { Component, Input, Output } from '@angular/core';
import {TasksService} from './tasks.service'
@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  //imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false; //pas besoin de définir le type car TS va déterminer automatiquement que c'est un boolean
  //private tasksService: TasksService; --> replaced by property in constructor

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  
  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
