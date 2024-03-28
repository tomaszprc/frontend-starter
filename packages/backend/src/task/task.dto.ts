import { InputType, Field, PartialType, PickType } from '@nestjs/graphql';

@InputType()
export class UpdateTask {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class CreateTask extends PartialType(
  PickType(UpdateTask, ['name', 'description'] as const),
  InputType,
) {}
