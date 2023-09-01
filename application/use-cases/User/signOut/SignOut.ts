import { IServices } from 'infrastructure/services/IServices';
import { ILogger } from 'logger/Logger';

type Payload = {
  body: any;
  identificatorObject: any;
};
export const signOut =
  ({ userService }: IServices, logger: ILogger) =>
  async ({ body, identificatorObject }: Payload): Promise<{ message: string }> => {
    logger.info('UOC-signOut');
    const token = identificatorObject.authorization?.split(' ')[1];
    return await userService.signOut(body.email, token);
  };
