export interface PostType {
  id: number;
  name: string;
  description: string;
}

export interface UpdatePostDto {
  id: number;
  name: string;
  description: string;
}

export interface CreatePostDto
  extends Pick<UpdatePostDto, 'name' | 'description'> {}
