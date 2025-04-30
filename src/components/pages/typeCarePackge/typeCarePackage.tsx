'use client';

import ButtonLight from '@/components/baseComponents/ButtonLight/ButtonLight';
import CreateTypeCarepackageForm from '@/components/forms/typeCarePackageItem/CreateForm/CreateTypeCarepackage';
import UpdatearePackageForm from '@/components/forms/typeCarePackageItem/UpdateForm/UpdateTypeCarepackage';

import { useState } from 'react';

export default function TypeCarePackagePage() {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <main className="flex-col s-center justify-center w-full">
      <h1 className="justify-self-center text-2xl">
        {isUpdate
          ? 'Atualização de Tipo de Cestas'
          : 'Criação de Tipo de Cestas'}
      </h1>
      {isUpdate ? <UpdatearePackageForm /> : <CreateTypeCarepackageForm />}
      <div className="m-0.5">
        <ButtonLight
          onClick={() => setIsUpdate(!isUpdate)}
          text={isUpdate ? 'Criar ' : 'Atualizar '}
        />
      </div>
    </main>
  );
}
