import bcrypt from 'bcrypt';
import { userDataParser } from './Schema';
import { ILogger } from 'logger/Logger';
import { IRepositoryUser } from 'application/entities/user/User.repository';
import { CustomError, Errors } from '../../../../../application/entities/shared/Errors';
import { User } from '../../../../../application/entities/user/User';

type AuthConfig = {
  saltRounds: any;
};
export const users: User[] = [];
export const userRepository = ({ saltRounds }: AuthConfig, logger: ILogger): IRepositoryUser => ({
  async create(user) {
    const log = logger.child({ function: 'create' });
    try {
      const userFound = users.find((userElement) => {
        return userElement.email === user.email;
      });
      if (userFound) {
        throw new CustomError(Errors.ALREADY_EXIST, `Not Found ${user.email}`);
      }
      user.password = await bcrypt.hash(user.password, Number(saltRounds));
      users.push(userDataParser(user));
      return users;
    } catch (e: any) {
      log.error(e);
      throw new CustomError(Errors.SERVER_ERROR, e);
    }
  }
});
