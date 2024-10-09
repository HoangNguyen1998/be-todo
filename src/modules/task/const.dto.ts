export enum ETaskStatus {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class CreateTaskDto {
  name: string;

  description: string;

  status: ETaskStatus;

  // This id will be get from auth. But now i just send from front-end
  ownerId: string;
}

export class UpdateTaskDto {
  name: string;

  description: string;

  status: ETaskStatus;

  // This id will be get from auth. But now i just send from front-end
}

export class GetTaskListDto {
  status?: ETaskStatus;

  ownerId: string;

  // This id will be get from auth. But now i just send from front-end
}

export class TaskResponseDto {
  id: string;
}

export class CreateTaskResponseDto extends TaskResponseDto {}

export class UpdateTaskResponseDto extends TaskResponseDto {}

export class DeleteTaskResponseDto extends TaskResponseDto {}
