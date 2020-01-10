import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

// modules
import { UsersModule } from './users/users.module';

// services
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [
    AuthService,
    LocalStrategy,
  ],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: SOME_ENVIRONMENT_VARIABLE,
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  exports: [
    AuthService,
  ],
})
export class AuthModule {}
