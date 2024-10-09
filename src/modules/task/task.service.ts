import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateTaskDto,
  CreateTaskResponseDto,
  DeleteTaskResponseDto,
  GetTaskListDto,
  UpdateTaskDto,
  UpdateTaskResponseDto,
} from './const.dto';
import { TaskEntity } from './task.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}
  public async createTask(body: CreateTaskDto): Promise<CreateTaskResponseDto> {
    console.log('he: ', body);
    const res = await this.taskRepository.save(body);
    return plainToInstance(CreateTaskResponseDto, res);
  }

  public async updateTask(
    id: string,
    body: UpdateTaskDto,
  ): Promise<UpdateTaskResponseDto> {
    const res = await this.taskRepository.update(id, body);
    return plainToInstance(UpdateTaskResponseDto, res);
  }

  public async getTaskList(params: GetTaskListDto): Promise<TaskEntity[]> {
    return this.taskRepository.find({
      where: {
        status: params.status,
        ownerId: params.ownerId,
      },
    });
  }

  public async deleteTask(id: string): Promise<DeleteTaskResponseDto> {
    const res = await this.taskRepository.softDelete(id);
    return plainToInstance(DeleteTaskResponseDto, res);
  }
}
