import { Controller, Get, UseGuards, Post } from '@nestjs/common';

// services
import { AppService } from './app.service';

// guards
import { AuthGuard } from './admin-authentication/guards/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /*
    AuthGuard('local') uses an AuthGuard automatically provisioned from @nestjs/passport.
    This references LocalStrategy
  */
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

}
