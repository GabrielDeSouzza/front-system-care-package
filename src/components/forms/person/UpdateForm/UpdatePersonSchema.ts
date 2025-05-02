import { childrenRelationPersonSchema } from '@/components/advancedComponents/childrenArr/ChildrenArrSchema';
import { z } from 'zod';

export const updatePersonSchema = z.object({
  name: z
    .string({ message: 'Digite um Email' })
    .min(3, {
      message: 'O nome deve ter pelo menos 3 caracteres',
    })
    .optional(),
  birthdayDate: z.coerce.date({ message: 'digite uma data valida' }).optional(),
  lastName: z.string({ message: 'Digite um sobrenome' }).optional(),
  hasChildren: z.boolean().optional(),
  children: z
    .array(
      childrenRelationPersonSchema
    )
    .optional()
    .optional(),
  deletedChildrenIds: z.array(z.string()).optional(),
  gender: z
    .enum(['Masculino', 'Feminino', 'Outro'], {
      errorMap: () => ({ message: 'Selecione um gênero' }),
      message: 'Selecione um gênero',
    })
    .optional(),
  newDocument: z
    .string({ message: 'Digite um documento' })
    .length(11, {
      message: 'O documento deve ter 11 caracteres',
    })
    .optional(),
  oldDocument: z
    .string({ message: 'Digite um documento' })
    .length(11, {
      message: 'O documento deve ter 11 caracteres',
    })
    .optional(),
});

export type updatePersonSchemaType = z.infer<typeof updatePersonSchema>;
