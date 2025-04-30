import { z } from 'zod';

export const typeCarepackageArrSchema = z.object({
  itemName: z.string().min(1, {
    message: 'Digite o nome do item',
  }),
});

export type typeCarepackageArrSchemaType = z.infer<
  typeof typeCarepackageArrSchema
>;
