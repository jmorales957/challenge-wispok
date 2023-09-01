import { IServices } from 'infrastructure/services/IServices';
import { ILogger } from 'logger/Logger';

import { SignInUserDTO } from '../../../entities/user/User.dto';

type Payload = {
  body: SignInUserDTO;
};
export const signIn =
  ({ userService }: IServices, logger: ILogger) =>
  async ({ body }: Payload): Promise<any> => {
    logger.info('UOC-signInUser');
    return await userService.signIn(body.password, body.email);
  };
