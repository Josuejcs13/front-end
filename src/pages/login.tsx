import { useForm } from "react-hook-form";
import loginSchema, { loginData } from "../schemas/loginSchema";
import InputZod from "../components/inputZod";
import { zodResolver } from "@hookform/resolvers/zod";


function Login() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>({ resolver: zodResolver(loginSchema) });

  const submitForm = async (data: loginData) => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <div>
      <InputZod type="email" schema={loginSchema} value="email" />
      {errors.email && <span>{errors.email.message}</span>}
      <InputZod type="password" schema={loginSchema} value="password" />
      {errors.password && <span>{errors.password.message}</span>}
      <button onClick={handleSubmit(submitForm)}>Submit</button>
    </div>
  );
}

export default Login;
