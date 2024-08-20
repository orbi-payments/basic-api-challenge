import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'ID of the user' })
  id: number;

  @Field(() => String, { description: 'Name of the user' })
  name: string;

  @Field(() => String, { description: 'Email of the user' })
  email: string;

  @Field(() => Int, { description: 'Age of the user' })
  age: number;

  @Field(() => Boolean, { description: 'Whether the user is active' })
  isActive: boolean;
}
