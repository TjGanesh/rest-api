import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schema/auth.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Users.name) private model: Model<Users>) {}
  async findAll(): Promise<Users[]> {
    const users = await this.model.find().exec();
    console.log(users);
    return users;
  }
  async findOne(): Promise<Users> {
    const users = await this.model
      .findOne({ email: 'eniesel1@liveinternet.ru' })
      .exec();
    console.log(users);
    return users;
  }
  async createUser(): Promise<Users> {
    const createdUser = await this.model.create({
      email: 'ganesh@sunkara.com',
      password: 'asdadasdasdd',
      firstName: 'ganesh',
      lastName: 'sunkara',
    });
    console.log(createdUser);
    return createdUser;
  }
}
