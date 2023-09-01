import { User } from '../../../../../application/entities/user/User';
import { CreateUserDTO } from 'application/entities/user/User.dto';

export const userDataParser = (user: CreateUserDTO): User => {
  return {
    id: user.email,
    name: user.name,
    password: user.password,
    email: user.email,
    createdAt: new Date()
  };
};
