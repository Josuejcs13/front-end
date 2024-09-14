import { useFormContext } from "react-hook-form";

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function Input({ name , ...props }: InputProp) {
  const { register } = useFormContext();
  return <input {...register(name)} {...props} />;
}

export default Input;
