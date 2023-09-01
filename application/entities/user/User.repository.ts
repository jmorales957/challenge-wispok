import { User } from './User';
import { CreateUserDTO } from './User.dto';

export type IRepositoryUser = {
  create(params: CreateUserDTO): Promise<User[]>;
  // signIn(password: string, email: string): Promise<any>;
  // signOut(email: string): Promise<User | null>;
  // status(): Promise<any>
};
