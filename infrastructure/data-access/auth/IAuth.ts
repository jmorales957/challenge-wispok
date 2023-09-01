export type IAuth = {
  signIn(password: string, email: string): Promise<{ message: string; token: string }>;
  signOut(email: string, token: string): Promise<{ message: string }>;
  identify(token: string): Promise<string>;
};
