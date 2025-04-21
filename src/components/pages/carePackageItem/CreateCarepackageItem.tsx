'use client';

import ButtonLight from '@/components/baseComponents/ButtonLight/ButtonLight';
import CreateCarePackageItemForm from '@/components/forms/carePackageItem/CreateForm/CreateCarepackageItem';
import UpdatearePackageItemForm from '@/components/forms/carePackageItem/UpdateForm/UpdateCarepackageItem';
import { useState } from 'react';

export default function CarePackagePage() {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <main className="flex-col items-center justify-center w-3xs">
      <h1 className="justify-self-center text-2xl">
        {isUpdate ? 'Atualização de item' : 'Criação de Item'}
      </h1>
      {isUpdate ? <UpdatearePackageItemForm /> : <CreateCarePackageItemForm />}
      <div className='m-0.5'>
        <ButtonLight
          onClick={() => setIsUpdate(!isUpdate)}
          text={isUpdate ? 'Criar Item' : 'Atualizar Item'}
        />
      </div>
    </main>
  );
}
