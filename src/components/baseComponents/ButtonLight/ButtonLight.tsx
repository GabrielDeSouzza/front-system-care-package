import { ButtonLightProps } from "./ButtonLightProps";

export default function ButtonLight({ onClick, text }: ButtonLightProps) {
  return (
    <button className="w-full bg-blue-100  p-1.5 rounded hover:bg-blue-200 transition-colors duration-300 cursor-pointer" type='button' onClick={onClick}>
      {text}
    </button>
  );
}
