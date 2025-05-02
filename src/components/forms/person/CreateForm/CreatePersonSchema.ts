import { childrenRelationPersonSchema } from '@/components/advancedComponents/childrenArr/ChildrenArrSchema';
import { z } from 'zod';

export const createPersonSchema = z.object({
  name: z.string({ message: 'Digite um Email' }).min(3, {
    message: 'O nome deve ter pelo menos 3 caracteres',
  }),
  birthdayDate: z.coerce.date({ message: 'digite uma data valida' }),
  lastName: z.string({ message: 'Digite um sobrenome' }),
  hasChildren: z.boolean(),
  children: z.array(childrenRelationPersonSchema).optional(),
  gender: z.enum(['Masculino', 'Feminino', 'Outro'], {
    errorMap: () => ({ message: 'Selecione um gênero' }),
    message: 'Selecione um gênero',
  }),
  document: z.string({ message: 'Digite um documento' }).length(11, {
    message: 'O documento deve ter 11 caracteres',
  }),
});

export type createPersonSchemaType = z.infer<typeof createPersonSchema>;
