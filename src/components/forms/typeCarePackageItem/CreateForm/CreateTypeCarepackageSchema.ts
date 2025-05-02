import { typeCarepackageArrSchema } from '@/components/advancedComponents/CarePackageItemArr/CarePackageItemArrSchema';
import { z } from 'zod';

export const createTypeCarepackageSchema = z.object({
  name: z.string({ message: 'Digite um nome' }).min(1, 'Digite um nome'),
  itensName: z.array(typeCarepackageArrSchema),
});

export type createTypeCarepackageSchemaType = z.infer<
  typeof createTypeCarepackageSchema
>;
