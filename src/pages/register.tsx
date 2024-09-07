import { useForm } from "react-hook-form";
import registerSchema, { registerData } from "../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";


function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerData>({ resolver: zodResolver(registerSchema) });

  const submitForm = async (data: registerData) => {
    try {
      console.log(data);
      
    } catch (error) {}
  };
  return (
    <div>
      <input type="text" {...register("name")} placeholder="Name" />
      {errors.name && <span>{errors.name.message} </span>}
      <input type="email" {...register("email")} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}
      <input type="password" {...register("password")} placeholder="Password" />
      {errors.password && <span>{errors.password.message}</span>}
      <button onClick={handleSubmit(submitForm)}>Submit</button>
    </div>
  );
}

export default Register;
