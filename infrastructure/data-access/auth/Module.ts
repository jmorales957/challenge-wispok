import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { CustomError, Errors } from '../../../application/entities/shared/Errors';
import { ILogger } from '../../../logger/Logger';
import { IAuth } from './IAuth';
import { userDataParser } from '../store/repositories/user/Schema';
import { users } from '../store/repositories/user/Repository';

type AuthConfig = {
  secretJwt: string;
};
const revokedTokens = new Set();
export const authModule = ({ secretJwt }: AuthConfig, logger: ILogger): IAuth => ({
  async signIn(password, email) {
    const log = logger.child({ function: 'signIn' });
    try {
      const user = users.find((user) => {
        return user.email === email;
      });
      if (!user) {
        throw new CustomError(Errors.NOT_FOUND, `Not Found ${email}`);
      }
      const userFound = userDataParser(user);

      const isValid = await bcrypt.compare(password, userFound.password);
      if (!isValid) throw new CustomError(Errors.BAD_CREDENTIALS, 'Bad Credentiasl');
      return {
        token: jwt.sign({ id: userFound.id, email: userFound.email }, secretJwt, { expiresIn: '1h' }),
        message: `Hi ${user.email}, welcome to the API system`
      };
    } catch (e: any) {
      log.error(e);
      if (e instanceof CustomError) {
        throw new CustomError(e.code as Errors, e.message);
      }
      throw new CustomError(Errors.SERVER_ERROR, e);
    }
  },
  async signOut(email, token) {
    const log = logger.child({ function: 'signIn' });
    try {
      const user = users.find((user) => {
        return user.email === email;
      });
      if (!user) {
        throw new CustomError(Errors.NOT_FOUND, `Not Found ${email}`);
      }
      revokedTokens.add(token);
      return { message: `Bye ${email}, your token has been revoked` };
    } catch (e: any) {
      log.error(e);
      if (e instanceof CustomError) {
        throw new CustomError(e.code as Errors, e.message);
      }
      throw new CustomError(Errors.SERVER_ERROR, e);
    }
  },
  async identify(token) {
    const log = logger.child({ function: 'identify' });
    try {
      if (revokedTokens.has(token)) {
        throw new CustomError(Errors.BAD_CREDENTIALS, `Bad Token`);
      }
      const decoded: any = await jwt.verify(token, secretJwt);
      const user = users.find((user) => {
        return user.email === decoded.email;
      });
      if (!user) {
        throw new CustomError(Errors.NOT_FOUND, `Not Found ${decoded.email}`);
      }
      return decoded.email;
    } catch (e: any) {
      log.error(e);
      if (e instanceof CustomError) {
        throw new CustomError(e.code as Errors, e.message);
      }
      throw new CustomError(Errors.SERVER_ERROR, e);
    }
  }
});
