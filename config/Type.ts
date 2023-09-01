import { ILogger } from '../logger/Logger';

export type IConfig = {
  http: {
    port: number;
  };
  baseLogger: ILogger;
  auth: {
    secretJwt: string;
    saltRounds: any;
  };
};
