import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

// services
import { AuthService } from './auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(
    private readonly authService: AuthService,
  ) {
    super();
  }

  /**
   * Validates a user's credential based on local strategy
   *
   * @param {string} username
   * @param {string} pass
   * @returns {Promise<any>}
   * @memberof LocalStrategy
   */
  async validate(username: string, pass: string): Promise<any> {
    const user = await this.authService.validateUser(username, pass);
    if (!user) {
      throw new UnauthorizedException();
    } else {
      return user;
    }
  }

}
