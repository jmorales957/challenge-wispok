import { IAuthEntity } from '../../application/entities/auth/IAuth';
import { IUser } from '../../application/entities/user/IUser';

export type IServices = {
  authService: IAuthEntity;
  userService: IUser;
};
