import { IRepositoryUser } from '../../application/entities/user/User.repository';
import { IAuth } from './auth/IAuth';

export type IDataAccess = {
  authModule: IAuth;
  userRepository: IRepositoryUser;
};
