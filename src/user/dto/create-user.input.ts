import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsEmail, IsInt, Min, Max } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Name of the user' })
  @IsString()
  name: string;

  @Field(() => String, { description: 'Email of the user' })
  @IsEmail()
  email: string;

  @Field(() => Int, { description: 'Age of the user' })
  @IsInt()
  @Min(18)
  @Max(99)
  age: number;
}
