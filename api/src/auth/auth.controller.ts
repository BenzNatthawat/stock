import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post('login')
  async login(@Body() req: any) {
    return this.authService.login(req);
  }
}
