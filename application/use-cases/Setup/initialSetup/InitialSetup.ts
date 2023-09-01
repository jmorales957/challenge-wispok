import { IServices } from 'infrastructure/services/IServices';
import { ILogger } from '../../../../logger/Logger';
import { CustomError, Errors } from '../../../entities/shared/Errors';

export const initialSetup =
  ({ userService, authService }: IServices, logger: ILogger) =>
  async (): Promise<any> => {
    try {
      return {};
    } catch (error: any) {
      throw new CustomError(Errors.SERVER_ERROR, error);
    }
  };
