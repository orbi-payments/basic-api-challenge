import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {
  private users: User[] = [];
  private nextId: number = 1;

  create(createUserInput: CreateUserInput) {
    const newUser: User = {
      id: this.nextId++,
      ...createUserInput,
      isActive: true,
    };
    
    this.users.push(newUser);

    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id == id)

    if (!user)
      throw new NotFoundException(`User with id ${id} not found`);

    return user;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    const userIndex = this.users.findIndex((user) => user.id == id);

    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const updatedUser = { ...this.users[userIndex], ...updateUserInput };
    
    this.users[userIndex] = updatedUser;

    return updatedUser;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id == id);

    if (userIndex === -1) 
      throw new NotFoundException(`User with id ${id} not found`);

    const deletedUser = this.users.splice(userIndex, 1);
    return deletedUser[0];
  }
}
