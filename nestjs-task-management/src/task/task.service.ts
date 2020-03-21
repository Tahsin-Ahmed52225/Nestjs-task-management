import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1'
import { createTaskDto } from './dto/create-task-dto';

@Injectable()
export class TaskService {
   private task:Task[] = [];

   getAlltask():Task[]{
       return this.task;  
   }
   getTaskbyID(id:string):Task{
       return this.task.find(task=> task.id === id);
   }
   createTask(createTaskDto : createTaskDto): Task{
       const { title , description} = createTaskDto; //class theke data indiviual variable e neyar jonno
       const task : Task ={
           id: uuid(),
           title,
           description,
           status : TaskStatus.OPEN,

       }
       this.task.push(task);
       return task;
   }
   deleteTaskbyId(id:string):Task[]{
    this.task = this.task.filter(task=> task.id !==id);
        
        return this.task;
   }
}
