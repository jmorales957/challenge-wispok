export type IAuthEntity = {
  identify(token: string): Promise<string>;
};
