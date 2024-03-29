import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostType, UpdatePostDto } from './post.dto';

const posts = [
  {
    id: 1,
    name: 'first post',
    description: 'first post description',
  },
  {
    id: 2,
    name: 'post second name',
    description: 'Task second description',
  },
  {
    id: 3,
    name: 'post third name',
    description: 'post third description',
  },
];

@Controller('post')
export class PostController {
  @Get()
  posts(): PostType[] {
    return posts;
  }

  @Get(':id')
  post(@Param('id') id: number): PostType {
    const post = posts.find((post) => post.id == id);
    return post;
  }

  @Post()
  createPost(@Body() postDto: PostType): PostType {
    const postId = posts.length ? posts[posts.length - 1].id + 1 : 0;
    const postObject = {
      id: postId,
      name: postDto.name,
      description: postDto.description || '',
    };

    posts.push(postObject);

    return postObject;
  }

  @Put()
  updateTask(@Body() postDto: UpdatePostDto): PostType {
    const post = posts.find((task) => task.id == postDto.id);
    post.name = postDto.name;
    post.description = postDto.description;

    return post;
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): PostType[] {
    const postIndex = posts.findIndex((obj) => obj.id === id);
    posts.splice(postIndex, 1);
    return posts;
  }
}
