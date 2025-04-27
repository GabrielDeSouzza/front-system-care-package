import { z } from 'zod';

export const updateCarepackageScheduleSchema = z.object({
  newDeliveryDate: z.coerce
    .date({ message: 'Digite um Nome Valido' })
    .optional(),
  carePackageCount: z.coerce
    .number()
    .min(1, 'O numero de cestas deve ser maior que 0')
    .optional(),
  oldDeliveryDate: z.coerce
    .date({ message: 'Digite um Novo Nome Valido' })
    .optional(),
});

export type updateCarepackageScheduleSchemaType = z.infer<
  typeof updateCarepackageScheduleSchema
>;
