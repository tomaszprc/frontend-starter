import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from './task.model';
import { CreateTask, UpdateTask } from './task.dto';

const tasks = [
  {
    id: 1,
    name: 'task Name',
    description: 'Task description',
  },
  {
    id: 2,
    name: 'task second name',
    description: 'Task second description',
  },
  {
    id: 3,
    name: 'task third name',
    description: 'Task third description',
  },
];

@Resolver()
export class TaskResolver {
  @Query(() => [Task])
  async tasks() {
    return tasks;
  }

  @Query(() => Task)
  async task(@Args('id', { type: () => Int }) id: number) {
    const task = tasks.find((task) => task.id == id);
    return task;
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('task')
    taskDto: UpdateTask,
  ) {
    const task = tasks.find((task) => task.id == taskDto.id);
    task.name = taskDto.name;
    task.description = taskDto.description;

    return task;
  }

  @Mutation(() => [Task])
  async deleteTask(@Args('id', { type: () => Int }) id: number) {
    const taskIndex = tasks.findIndex((obj) => obj.id === id);
    tasks.splice(taskIndex, 1);
    return tasks;
  }

  @Mutation(() => Task)
  async addTask(
    @Args('task')
    taskDto: CreateTask,
  ) {
    const taskId = tasks[tasks.length - 1].id + 1 || 0;
    const taskObject = {
      id: taskId,
      name: taskDto.name,
      description: taskDto.description || '',
    };

    tasks.push(taskObject);
    return taskObject;
  }
}
