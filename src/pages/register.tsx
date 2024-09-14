import { FormProvider, useForm } from "react-hook-form";
import registerSchema, { registerData } from "../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/input";
import useRegister from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const methods = useForm<registerData>({
    resolver: zodResolver(registerSchema),
  });
  const { createUser } = useRegister();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const submitForm = async (data: registerData) => {
    try {
      createUser(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormProvider {...methods}>
      <div>
        <Input name="name" />
        {errors.name && <span>{errors.name.message} </span>}
        <Input name="email" type="email" />
        {errors.email && <span>{errors.email.message}</span>}
        <Input name="password" type="password" />
        {errors.password && <span>{errors.password.message}</span>}
        <button onClick={handleSubmit(submitForm)}>Submit</button>
      </div>
    </FormProvider>
  );
}

export default Register;
