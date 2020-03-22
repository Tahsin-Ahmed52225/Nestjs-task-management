import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1'
import { createTaskDto } from './dto/create-task-dto';
import { getTaskbySearch } from './dto/get-task-search.dto';

@Injectable()
export class TaskService {
   private task:Task[] = [];

   getAlltask():Task[]{
       return this.task;  
   }
   getTaskbySearch(filterDto : getTaskbySearch):Task[]{
     const{status , search} = filterDto;
     let task = this.getAlltask();
     if(status){
         task = this.task.filter(task => task.status === status);
     }
     if(search){
         task = task.filter(task =>
             task.title.includes(search)||
             task.description.includes(search)
         );
     }
    return task;

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
   updateTaskbyId(id:string, status: TaskStatus):Task{
       const task = this.getTaskbyID(id);
       task.status = status;
       return task;
   }
}
