import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsEmail, IsInt, Min, Max, IsOptional, IsBoolean } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => Int, { description: 'Id of the user' })
  @IsInt()
  id: number

  @Field(() => String, { description: 'Name of the user', nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field(() => String, { description: 'Email of the user', nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field(() => Int, { description: 'Age of the user', nullable: true })
  @IsOptional()
  @IsInt()
  @Min(18)
  @Max(99)
  age?: number;

  @Field(() => Boolean, { description: 'Whether the user is active', nullable: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
