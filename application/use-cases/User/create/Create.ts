import { IServices } from 'infrastructure/services/IServices';
import { ILogger } from 'logger/Logger';

import { CustomError, Errors } from '../../../entities/shared/Errors';
import { User } from '../../../entities/user/User';
import { CreateUserDTO } from '../../../entities/user/User.dto';

type Payload = {
  body: CreateUserDTO;
};
export const createUser =
  ({ userService }: IServices, logger: ILogger) =>
  async ({ body }: Payload): Promise<User[]> => {
    logger.info('UOC-createUser');
    return await userService.create(body);
  };
