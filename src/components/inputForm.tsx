import { useFormContext } from "react-hook-form";

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
}

function Input({ className, name, ...props }: InputProp) {
  const { register } = useFormContext();
  

  return (
    <input
      className={`${className} w-full rounded-3xl py-4 px-16 border-2 border-[#508a94]`}
      {...register(name)}
      {...props}
    />
  );
}

export default Input;
