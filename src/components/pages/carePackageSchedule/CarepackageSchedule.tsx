'use client';

import ButtonLight from '@/components/baseComponents/ButtonLight/ButtonLight';
import CreateCarePackageItemForm from '@/components/forms/carePackageItem/CreateForm/CreateCarepackageItem';
import UpdatearePackageItemForm from '@/components/forms/carePackageItem/UpdateForm/UpdateCarepackageItem';
import CreateCarePackageScheduleForm from '@/components/forms/carePackageSchedule/CreateForm/CreateCarepackageSchedule';
import UpdatearePackageScheduleForm from '@/components/forms/carePackageSchedule/UpdateForm/UpdateCarepackageSchedule';
import { useState } from 'react';

export default function CarePackageSchedulePage() {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <main className="flex-col items-center justify-center w-3xs">
      <h1 className="justify-self-center text-2xl">
        {isUpdate ? 'Atualização de data' : 'Criação de data'}
      </h1>
      {isUpdate ? (
        <UpdatearePackageScheduleForm />
      ) : (
        <CreateCarePackageScheduleForm />
      )}
      <div className="m-0.5">
        <ButtonLight
          onClick={() => setIsUpdate(!isUpdate)}
          text={isUpdate ? 'Criar Data' : 'Atualizar Data'}
        />
      </div>
    </main>
  );
}
