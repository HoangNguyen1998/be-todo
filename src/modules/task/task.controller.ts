import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import {
  CreateTaskDto,
  CreateTaskResponseDto,
  DeleteTaskResponseDto,
  GetTaskListDto,
  UpdateTaskDto,
  UpdateTaskResponseDto,
} from './const.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(@Query() query: GetTaskListDto) {
    return this.taskService.getTaskList(query);
  }

  @Post()
  createTask(@Body() body: CreateTaskDto): Promise<CreateTaskResponseDto> {
    console.log(body);
    return this.taskService.createTask(body);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body() body: UpdateTaskDto,
  ): Promise<UpdateTaskResponseDto> {
    return this.taskService.updateTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<DeleteTaskResponseDto> {
    return this.taskService.deleteTask(id);
  }
}
