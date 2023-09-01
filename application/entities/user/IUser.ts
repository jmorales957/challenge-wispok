import { PaginatedResult } from '../common/Pagination';
import { User } from './User';
import { CreateUserDTO } from './User.dto';

export type IUser = {
  create(params: CreateUserDTO): Promise<User[]>;
  signIn(password: string, email: string): Promise<{ message: string; token: string }>;
  signOut(email: string, token: string): Promise<{ message: string }>;
};
