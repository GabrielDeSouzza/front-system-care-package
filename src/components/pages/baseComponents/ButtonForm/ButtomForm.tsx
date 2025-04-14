import { ButtonFormProps } from './ButtonFormProps';

export default function ButtonForm({ type, text }: ButtonFormProps) {
  return (
    <button className="w-full bg-blue-300 p-1.5 rounded hover:bg-blue-400 transition-colors duration-300 cursor-pointer" type={type}>
      {text}
    </button>
  );
}
