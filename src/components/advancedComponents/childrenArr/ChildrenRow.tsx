import { useFormContext } from 'react-hook-form';
import { InputControlled } from '@/components/baseComponents/InputControlled/InputControlled';
import ComboBox from '@/components/baseComponents/ComboBox/ComboBox';

export function ChildrenRow({ name, index }: { name: string; index: number }) {
  return (
    <>
      <div>
        <InputControlled
          label="Nome"
          name={`${name}.${index}.name`}
          placeholder="Digite o nome"
        />
      </div>
      <div>
        <InputControlled
          label="sobrenome"
          name={`${name}.${index}.lastName`}
          placeholder="Digite o sobrenome"
        />
      </div>
      <div className="w-[10rem]">
        <InputControlled
          label="Data de nascimento"
          name={`${name}.${index}.birthdayDate`}
          placeholder="Digite o data de nascimento"
          type="date"
        />
      </div>
      <div>
        <ComboBox
          label="Sexo"
          name={`${name}.${index}.gender`}
          options={[
            {
              label: 'Masculino',
              value: 'M',
            },
            {
              label: 'Feminino',
              value: 'F',
            },
            {
              label: 'Outro',
              value: 'O',
            },
          ]}
        />
      </div>
    </>
  );
}
