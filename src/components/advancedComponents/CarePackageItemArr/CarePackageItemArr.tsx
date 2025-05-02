import { useFieldArray } from 'react-hook-form';
import { CarePackageItemRow } from './CarePackageItemRow';
import { CarePackageItemArrProps } from './CarePackageItemArrProps';

export function CarePackageItemArr({ name }: CarePackageItemArrProps) {
  const { fields, append, remove } = useFieldArray({
    name,
  });

  return (
    <>
      {fields.map((item, index) => (
        <div key={item.id} className="flex flex-col">
          <CarePackageItemRow key={item.id} name={name} index={index} />
          <button
            type="button"
            onClick={() => {
              remove(index);
            }}
            className="p-1 mt-2 cursor-pointer bg-red-300 rounded text-red-500 hover:text-red-700"
          >
            Deletar Item
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          append({ itemName: '' });
        }}
        className="rounded p-1.5 mt-2 cursor-pointer bg-blue-200 point text-blue-500 hover:text-blue-700"
      >
        Adicionar Item
      </button>
    </>
  );
}
