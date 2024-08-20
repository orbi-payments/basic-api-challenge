import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      userId: 1,
      username: 'admin',
      password: 'password',
    },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
