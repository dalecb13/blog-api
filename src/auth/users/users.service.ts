import { Injectable } from '@nestjs/common';

// interfaces
import { User } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    // private userDataSource: UserDataSource,
  ) {}

  async getUserByUsername(username: string): Promise<User | undefined> {
    return new Promise<User | undefined>(resolve => {
      resolve({
        id: 'fake-id',
        username: 'dalecb13',
        password: 'fakepassword',
      });
    });
  }
}
