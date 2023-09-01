import { AnyZodObject } from 'zod';
import { CreateUserDTO, SignInUserDTO, SignOutUserDTO } from '../../../../application/entities/user/User.dto';

export type Route = {
  path: string;
  verb: string;
  useCase: any;
  successCode?: number;
  fileBuffer?: boolean;
  schemaValidation?: AnyZodObject | undefined;
};

export const routes: (dependencies: any) => Array<Route> = (dependencies: any) => [
  //USERS
  { path: '/users', verb: 'POST', useCase: dependencies.createUser, schemaValidation: CreateUserDTO },
  { path: '/sign-in', verb: 'POST', useCase: dependencies.signIn, schemaValidation: SignInUserDTO },
  { path: '/sign-out', verb: 'POST', useCase: dependencies.signOut, schemaValidation: SignOutUserDTO },
  { path: '/status', verb: 'POST', useCase: dependencies.status }
];
