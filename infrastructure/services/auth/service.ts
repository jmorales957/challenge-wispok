import { IAuthEntity } from '../../../application/entities/auth/IAuth';
import { ILogger } from '../../../logger/Logger';
import { IDataAccess } from '../../data-access/IDataAccess';

export const authService = ({ authModule }: IDataAccess, logger: ILogger): IAuthEntity => ({
  async identify(token) {
    return await authModule.identify(token);
  }
});
