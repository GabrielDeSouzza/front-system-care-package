import { z } from 'zod';

export const createCarepackageItemSchema = z.object({
  name: z
    .string({ message: 'Digite um email' })
});

export type createCarepackageItemSchemaType = z.infer<typeof createCarepackageItemSchema>;
