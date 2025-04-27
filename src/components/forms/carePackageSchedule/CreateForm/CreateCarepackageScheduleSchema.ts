import { z } from 'zod';

export const createCarepackageScheduleSchema = z.object({
  deliveryDate: z.coerce.date({ message: 'Digite uma Data Valida' }),
  carePackageCount: z.coerce
    .number()
    .min(1, 'O Schedule deve ter pelo menos 1 cesta para entrega'),
});

export type createCarepackageScheduleSchemaType = z.infer<
  typeof createCarepackageScheduleSchema
>;
