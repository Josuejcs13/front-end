import { FormProvider, useForm } from "react-hook-form";
import loginSchema, { loginData } from "../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useLogin from "../hooks/useLogin";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";

function Login() {
  const methods = useForm<loginData>({ resolver: zodResolver(loginSchema) });
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const { login } = useLogin();
  const submitForm = async (data: loginData) => {
    try {
      await login(data);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormProvider {...methods}>
      <div>
        <Input name="email" type="email" />
        {errors.email && <span>{errors.email.message}</span>}
        <Input name="password" type="password" />
        {errors.password && <span>{errors.password.message}</span>}
        <button onClick={handleSubmit(submitForm)}>Submit</button>
      </div>
    </FormProvider>
  );
}

export default Login;
