import { FormProvider, useForm } from "react-hook-form";
import loginSchema, { loginData } from "../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useLogin from "../hooks/useLogin";
import Input from "../components/inputForm";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLock } from "react-icons/tfi";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleView = () => {
    event?.preventDefault();
    setIsVisible((prev) => !prev);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col px-6 items-center h-screen w-full pt-40 bg-[#70B9BE]">
        <h1 className="text-2xl font-bold pb-1 text-white">Welcome Back!</h1>
        <p className="text-white">Please enter your account</p>
        <form className="flex flex-col pt-9  gap-4  w-full">
          <div className="relative">
            <Input
              placeholder="Email or phone number"
              name="email"
              type="email"
            />
            <HiOutlineMail className="absolute top-4 left-5 size-6" />
          </div>
          {errors.email && (
            <span className="text-red-600 font-medium">
              {errors.email.message}
            </span>
          )}
          <div className="relative">
            <Input
              placeholder="Password"
              name="password"
              type={`${isVisible ? "text" : "password"}`}
            />
            <TfiLock
              className="absolute top-[1.125rem]  left-5 size-[1.375rem]"
              style={{ strokeWidth: 0.5 }}
            />
            <button onClick={handleView}>
              {isVisible ? (
                <AiOutlineEye className="absolute top-4 right-5 size-6" />
              ) : (
                <AiOutlineEyeInvisible className="absolute top-4 right-5 size-6" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-600 font-medium pt-2">
              {errors.password.message}
            </span>
          )}
          <a href="#" className="flex justify-end pb-14 ">
            <p className="transition-all font-medium">Forgot password?</p>
          </a>
        </form>
        <button
          onClick={handleSubmit(submitForm)}
          className="py-4 w-full  bg-[#042628] rounded-2xl mb-5 text-white font-bold"
        >
          Login
        </button>
        <p className="font-medium">
          Don’t have any account?
          <Link to={"/register"} className="p-2  text-[#042628] font-semibold">
            Sing in
          </Link>
        </p>
      </div>
    </FormProvider>
  );
}

export default Login;
