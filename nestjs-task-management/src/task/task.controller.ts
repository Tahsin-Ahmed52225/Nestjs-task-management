import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, TaskStatus } from './task.model';
import { createTaskDto } from './dto/create-task-dto';
import { getTaskbySearch } from './dto/get-task-search.dto';

@Controller('task')
export class TaskController {
    constructor(private taskService : TaskService){}
    @Get()
    gettask(@Query() searchDto : getTaskbySearch): Task[] {
      if(Object.keys(searchDto).length){
          return this.taskService.getTaskbySearch(searchDto);
      }
      else{
        return  this.taskService.getAlltask();
      }
      
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
    @Patch('/:id/status')
    updateTaskbyId(
      @Param('id')id:string,
      @Body('status')status:TaskStatus
    ):Task{
        return this.taskService.updateTaskbyId(id,status);
    }

}
