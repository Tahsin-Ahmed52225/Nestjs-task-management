import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { createTaskDto } from './dto/create-task-dto';

@Controller('task')
export class TaskController {
    constructor(private taskService : TaskService){}
    @Get()
    getAlltask(): Task[] {
        
      return  this.taskService.getAlltask();
    }
    @Get('/:id')
    getTaskbyID(@Param('id') id : string): Task{
        return this.taskService.getTaskbyID(id);

    }
    @Post()
    createTask(@Body() createTaskDto : createTaskDto ){
        return this.taskService.createTask(createTaskDto);
    }
    @Delete('/:id')
    deleteTaskbyID(@Param('id') id:string):Task[]{
        return this.taskService.deleteTaskbyId(id);
    }

}
