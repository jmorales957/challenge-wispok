import { IConfig } from 'config/Type';

import { ILogger } from '../../logger/Logger';
import { IDataAccess } from './IDataAccess';
import { authModule } from './auth/Module';
import { userRepository } from './store/repositories/user/Repository';

export const dataAccess = async ({ auth }: IConfig, loggerFactory: ILogger): Promise<IDataAccess> => {
  const logger = loggerFactory.child({ module: 'dataAccess' });
  try {
    const authModuleSetUp = authModule(auth, logger.child({ dataAccess: 'authModule' }));
    const userRepositorySetUp = userRepository(auth, logger.child({ dataAccess: 'userRepository' }));

    return {
      authModule: authModuleSetUp,
      userRepository: userRepositorySetUp
    };
  } catch (e) {
    logger.error('Failed to initialize Data access with error:', e);
    throw e;
  }
};
