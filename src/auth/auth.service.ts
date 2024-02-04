import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schema/auth.schema';
import { SignInDto, SignUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Users.name) private model: Model<Users>) {}

  async signIn(signInDto: SignInDto): Promise<Users> {
    const user = await this.model.findOne({ email: signInDto.email }).exec();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
  async createUser(signUpDto: SignUpDto): Promise<Users> {
    const createdUser = await this.model.create({
      email: signUpDto.email,
      password: signUpDto.password,
      firstName: signUpDto.firstName,
      lastName: signUpDto.lastName,
    });
    return createdUser;
  }
}
