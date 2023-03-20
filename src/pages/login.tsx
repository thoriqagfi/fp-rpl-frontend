import Image from "next/image";

import { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Input from "@/components/input/Input";

import EcomerceImage from "public/4k.jpg";
import GoogleIcon from "public/google-icon.svg";
import Eye from "public/eye.svg";
import EyeSlash from "public/eye-slash.svg";
import Link from "next/link";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const methods = useForm<FormValues>({
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = methods;

  register("password", {
    required: "This is required!",
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        email: "",
        password: "",
      });
    }
  }, [formState, reset]);

  return (
    <section className="min-h-screen w-full bg-white p-6 text-black flex justify-center items-center font-poppins">
      <div className="flex flex-col min-h-[93vh] w-full md:w-[55%] rounded-2xl items-center justify-center">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit((data) => {
              // console.log(data);
            })}
            className={`flex flex-col gap-y-4 w-full items-center justify-center`}
          >
            <span className="flex flex-col items-center">
              <h2 className="font-semibold text-[40px]">Welcome Back</h2>
              <h3 className=" text-gray-400 mb-2">
                Please enter your contact detail to connect
              </h3>
            </span>

            <Input
              id="email"
              titleLabel="Email Address"
              inputType="text"
              registerType={{
                required: "This is required!",
                pattern: {
                  value: /^\S+@\S+[.]+\S/i,
                  message: "Invalid Email",
                },
              }}
              placeholder="Email"
              paddingY={2}
              errorMessage={errors.email?.message}
            />

            <div className="w-4/5 md:w-7/12">
              <label htmlFor="password">Password</label>
              <span className="flex hover:border-gray-400 duration-200 bg-transparent rounded-md border-gray-300 border-[1px] px-2 py-2">
                <input
                  type={passwordShown ? "text" : "password"}
                  {...register("password")}
                  placeholder="Password"
                  className="w-full focus:placeholder:opacity-0 focus:outline-none bg-transparent"
                />
                <Image
                  onClick={() => {
                    setPasswordShown(!passwordShown);
                  }}
                  src={passwordShown ? EyeSlash : Eye}
                  // src=""
                  className="cursor-pointer scale-90"
                  alt=""
                />
              </span>
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            <span className="w-4/5 md:w-7/12 flex justify-between items-center">
              <label>
                <input
                  type="checkbox"
                  name="remember-me"
                  id=""
                  className="fill-white bg-white text-white mr-1"
                />
                <span>Remember me</span>
              </label>
              <Link className="hover:underline" href="/">
                Forgot Password
              </Link>
            </span>

            <button
              type="submit"
              className="rounded-md cursor-pointer bg-gray-900 hover:bg-gray-800 p-2 text-white w-4/5 md:w-7/12 duration-200"
            >
              Log in
            </button>
          </form>
        </FormProvider>

        <button className="flex items-center justify-center gap-3 mt-2 rounded-md cursor-pointer border-[1px] hover:border-gray-400 border-gray-300 p-2 w-4/5 md:w-7/12 duration-200">
          <Image className="w-5" src={GoogleIcon} alt="" />
          <span>Log in with Google</span>
        </button>

        <span className="flex gap-2 mt-2">
          <h3 className="text-gray-600">Don&apos;t have an account ?</h3>
          <Link className="hover:underline" href="/register">
            Sign up here
          </Link>
        </span>
      </div>

      <picture className="w-[45%] relative min-h-[93vh] hidden md:flex bg-purple-500 rounded-3xl overflow-hidden">
        <Image
          className="absolute w-full h-full bg-red-400 object-center object-cover"
          src={EcomerceImage}
          alt="image"
        />
      </picture>
    </section>
  );
}
