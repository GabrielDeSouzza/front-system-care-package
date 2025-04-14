import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ message: 'Digite um email' })
    .email({ message: 'Email Invalido' }),
  password: z
    .string({ message: 'Senha Invalida' })
    .min(5, { message: 'Senha Invalida' })
    .nonempty('Senha Invalida'),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
