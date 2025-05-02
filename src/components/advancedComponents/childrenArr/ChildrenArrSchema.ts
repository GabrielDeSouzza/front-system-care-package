import { z } from 'zod';

export const childrenRelationPersonSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, {
    message: 'Digite um nome',
  }),
  lastName: z.string().min(1, {
    message: 'Digite um sobrenome',
  }),
  birthdayDate: z.coerce.date({ message: 'digite uma data valida' }),
  gender: z.enum(['Masculino', 'Feminino', 'Outro'], {
    errorMap: () => ({ message: 'Selecione um gênero' }),
    message: 'Selecione um gênero',
  }),
});

export type childrenRelationPersonSchemaType = z.infer<
  typeof childrenRelationPersonSchema
>;
