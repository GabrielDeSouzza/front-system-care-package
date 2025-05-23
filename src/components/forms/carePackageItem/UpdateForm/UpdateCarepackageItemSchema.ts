import { z } from 'zod';

export const updateCarepackageItemSchema = z.object({
  newName: z
    .string({ message: 'Digite um Nome Valido' })
    .min(3, 'O Item Deve ter pelo menos 3 caracteres'),
  oldName: z
    .string({ message: 'Digite um Novo Nome Valido' })
    .min(3, 'O novo nome deve ter o pelo menos 3 caracteres'),
});

export type updateCarepackageItemSchemaType = z.infer<
  typeof updateCarepackageItemSchema
>;
