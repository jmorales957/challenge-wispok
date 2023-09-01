import { z } from 'zod';

export const CreateUserDTO = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string()
  })
  .strict();

export type CreateUserDTO = z.infer<typeof CreateUserDTO>;

export const SignInUserDTO = z
  .object({
    email: z.string(),
    password: z.string()
  })
  .strict();

export type SignInUserDTO = z.infer<typeof SignInUserDTO>;

export const SignOutUserDTO = z
  .object({
    email: z.string()
  })
  .strict();

export type SignOutUserDTO = z.infer<typeof SignOutUserDTO>;
