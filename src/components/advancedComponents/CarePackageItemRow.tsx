import {
  searchCarePackageItemData,
  searchCbCarePackageItensAction,
} from '@/actions/carePackageItem/searchCbCarePackageItensAction';
import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import ComboBox from '../baseComponents/ComboBox/ComboBox';
import { typeCarepackageArrSchemaType } from './CarePackageItemArrSchema';

export function CarePackageItemRow({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  const { control, watch } = useFormContext<typeCarepackageArrSchemaType>();
  const watchedName = watch(`${name}.${index}.itemName` as 'itemName');
  const [debouncedName] = useDebounce(watchedName, 500);
  const [resultQuery, setResultQuery] = useState<searchCarePackageItemData[]>(
    [],
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await searchCbCarePackageItensAction(debouncedName);
      setResultQuery(result);
    };
    fetchData();
  }, [debouncedName]);

  return (
    <>
      <ComboBox
        control={control}
        name={`${name}.${index}.itemName`}
        label="Item"
        options={resultQuery.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
      />
    </>
  );
}
