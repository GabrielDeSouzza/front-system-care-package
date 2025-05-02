import { useFieldArray } from 'react-hook-form';
import { ChildrenRow } from './ChildrenRow';
import { ChildrenArrProps } from './ChildrenArrProps';

export function ChildrenArr({ name }: ChildrenArrProps) {
  const { fields, append, remove } = useFieldArray({
    name,
  });

  return (
    <>
      {fields.map((item, index) => (
        <div
          key={item.id}
          className="flex flex-row border-blue-300 border-2 rounded gap-1 p-2 m-1 flex-wrap"
        >
          <ChildrenRow key={item.id} name={name} index={index} />
          <button
            type="button"
            onClick={() => {
              remove(index);
            }}
            className="text-3xl m-1 p-2 cursor-pointer bg-red-300 rounded text-black hover:text-red-700 self-end"
          >
            X
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          append({});
        }}
        className="rounded p-1.5 mt-2 cursor-pointer bg-blue-200 point text-blue-500 hover:text-blue-700"
      >
        Adicionar Filho
      </button>
    </>
  );
}
