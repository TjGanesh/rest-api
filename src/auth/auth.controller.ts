import { Body, Controller, Post } from '@nestjs/common';
import { Users } from './schema/auth.schema';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<Users> {
    return this.service.createUser(signUpDto);
  }
  @Post('login')
  async signIn(@Body() signInDto: SignInDto): Promise<Users> {
    return this.service.signIn(signInDto);
  }
}
