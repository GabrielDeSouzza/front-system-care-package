'use client';

import ButtonLight from '@/components/baseComponents/ButtonLight/ButtonLight';
import CreatePersonForm from '@/components/forms/person/CreateForm/CreatePerson';
import UpdatearePersonForm from '@/components/forms/person/UpdateForm/UpdatePerson';
import { useState } from 'react';

export default function PersonPage() {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <main className="flex-col items-center justify-center ">
      <h1 className="justify-self-center text-2xl">
        {isUpdate ? 'Atualização de item' : 'Criação de Item'}
      </h1>
      {isUpdate ? <UpdatearePersonForm /> : <CreatePersonForm />}
      <div className="m-0.5">
        <ButtonLight
          onClick={() => setIsUpdate(!isUpdate)}
          text={isUpdate ? 'Criar Item' : 'Atualizar Item'}
        />
      </div>
    </main>
  );
}
