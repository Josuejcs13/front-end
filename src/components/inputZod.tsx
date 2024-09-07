import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginData } from "../schemas/loginSchema";
import { z } from "zod";

type InputZodProps = {
  type: string;
  schema: z.ZodTypeAny;
  value: "email" | "password";
  name?: string;
};
function InputZod({ type, schema, value }: InputZodProps) {
  const { register } = useForm<loginData>({
    resolver: zodResolver(schema),
  });

  return <input type={type} {...register(value)} />;
}

export default InputZod;
