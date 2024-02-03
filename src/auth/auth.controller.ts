import { Controller, Get, Post } from '@nestjs/common';
import { Users } from './schema/auth.schema';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Get()
  async findAll(): Promise<Users[]> {
    return this.service.findAll();
  }
  @Post('create-user')
  async createUser(): Promise<Users> {
    return this.service.createUser();
  }
}
