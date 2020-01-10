import { Module } from '@nestjs/common';

// services
import { UsersService } from './users.service';

@Module({
  providers: [
    UsersService,
  ],
  exports: [
    UsersService,
  ],
})
export class UsersModule {}
