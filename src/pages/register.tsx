import { FormProvider, useForm } from "react-hook-form";
import registerSchema, { registerData } from "../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/inputForm";
import useRegister from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLock } from "react-icons/tfi";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";

function Register() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleView = () => {
    event?.preventDefault();
    setIsVisible((prev) => !prev);
  };

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
      <div className="flex flex-col px-6 items-center h-screen w-full pt-40 bg-[#70B9BE]">
        <h1 className="text-2xl font-bold pb-1">Welcome Back!</h1>
        <p className="text-stone-700">Please enter your account</p>
        <form className="flex flex-col pt-9  gap-4  w-full">
          <div className="relative">
            <Input className="" name="name" placeholder="Name" />
            <IoPersonOutline className="absolute top-[1.125rem]  left-5 size-[1.375rem]" />
          </div>
          {errors.name && (
            <span className="text-red-600 font-medium">
              {errors.name.message}
            </span>
          )}
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
            <span className="text-red-600 font-medium">
              {errors.password.message}
            </span>
          )}
          <button
            onClick={handleSubmit(submitForm)}
            className="py-4 w-full mt-6  bg-[#042628] rounded-2xl mb-5 text-white font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </FormProvider>
  );
}

export default Register;
