import { IServices } from 'infrastructure/services/IServices';
import { ILogger } from 'logger/Logger';

type Payload = {
  identificatorObject: any;
};
export const status =
  ({ authService }: IServices, logger: ILogger) =>
  async ({ identificatorObject }: Payload): Promise<{ message: string; time: Date }> => {
    const token = identificatorObject.authorization?.split(' ')[1];
    const email = await authService.identify(token);

    logger.info('UOC-signInUser');
    return {
      message: `Hi ${email}, the API system is up and running`,
      time: new Date()
    };
  };
