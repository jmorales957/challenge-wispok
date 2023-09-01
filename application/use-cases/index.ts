import { IServices } from 'infrastructure/services/IServices';

import { ILogger } from '../../logger/Logger';
import { createUser } from './User/create/Create';
import { signIn } from './User/signIn/SignIn';
import { signOut } from './User/signOut/SignOut';
import { status } from './User/status/Status';
export const useCaseFactory = (services: IServices, baseLogger: ILogger) => ({
  createUser: createUser(services, baseLogger.child({ controller: 'createUser' })),
  signIn: signIn(services, baseLogger.child({ controller: 'signIn' })),
  signOut: signOut(services, baseLogger.child({ controller: 'signOut' })),
  status: status(services, baseLogger.child({ controller: 'status' }))
});
