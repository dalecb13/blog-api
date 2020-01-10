import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// service
import { UsersService } from '../users/users.service';

// interfaces
import { User } from '../users/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user: User = await this.userService.getUserByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    } else {
      return null;
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
