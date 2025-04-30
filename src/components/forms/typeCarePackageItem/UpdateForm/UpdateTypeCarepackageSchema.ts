import { typeCarepackageArrSchema } from '@/components/advancedComponents/CarePackageItemArrSchema';
import { z } from 'zod';

export const updateTypeCarePackageSchema = z.object({
  newName: z
    .string({ message: 'Digite um Nome Valido' })
    .min(3, 'O Item Deve ter pelo menos 3 caracteres'),
  oldName: z
    .string({ message: 'Digite um Novo Nome Valido' })
    .min(3, 'O novo nome deve ter o pelo menos 3 caracteres'),
  itensName: z.array(typeCarepackageArrSchema).optional(),
  deletedItensName: z.array(z.string()).optional(),
});

export type updateTypeCarePackageSchemaType = z.infer<
  typeof updateTypeCarePackageSchema
>;
