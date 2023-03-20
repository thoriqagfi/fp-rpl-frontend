import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Input from "@/components/input/Input";

import EcomerceImage from "public/4k.jpg";
import GoogleIcon from "public/google-icon.svg";
import Eye from "public/eye.svg";
import EyeSlash from "public/eye-slash.svg";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  city: string;
  address: string;
  password: string;
  role: string;
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

  register("role", {
    required: "This is required!",
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: 0,
        password: "",
        role: "",
      });
    }
  }, [formState, reset]);

  return (
    <section className="min-h-screen w-full bg-white p-6 dark:bg-darkBG text-black flex justify-center items-center font-poppins">
      <div className="flex flex-col min-h-[93vh] w-full md:w-[55%] rounded-2xl items-center justify-center">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit((data) => {
              // console.log(data);
            })}
            className={`flex flex-col gap-y-1 w-full items-center justify-center`}
          >
            <span className="flex flex-col items-center">
              <h2 className="font-semibold text-[34px] lg:text-[40px]">
                Create an account
              </h2>
              <h3 className="text-gray-400 mb-2 lg:text-base text-xs">
                Hello there! Please enter your details below to register
              </h3>
            </span>

            <div className="flex gap-2 w-4/5 md:w-7/12">
              <Input
                id="firstName"
                titleLabel="First Name"
                inputType="text"
                registerType={{
                  required: "This is required!",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required",
                  },
                }}
                placeholder="First Name"
                paddingY={1}
                errorMessage={errors.firstName?.message}
              />

              <Input
                id="lastName"
                titleLabel="Last Name"
                inputType="text"
                registerType={{
                  required: "This is required!",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required",
                  },
                }}
                placeholder="Last Name"
                paddingY={1}
                errorMessage={errors.lastName?.message}
              />
            </div>

            <Input
              id="email"
              titleLabel="Email Address"
              inputType="text"
              registerType={{
                required: "This Email is required!",
                pattern: {
                  value: /^\S+@\S+[.]+\S/i,
                  message: "Invalid Email",
                },
              }}
              placeholder="Email"
              paddingY={1}
              errorMessage={errors.email?.message}
            />

            <Input
              id="phoneNumber"
              titleLabel="Phone Number"
              inputType="tel"
              registerType={{
                required: "This is required!",
                minLength: {
                  value: 10,
                  message: "Minimum 10 number required!",
                },
                pattern: {
                  value: /^\d+$/i,
                  message: "Invalid Phone Number",
                },
              }}
              placeholder="Phone Number"
              paddingY={1}
              errorMessage={errors.phoneNumber?.message}
            />

            <div className="flex gap-2 w-4/5 md:w-7/12">
              <Input
                id="city"
                titleLabel="City"
                inputType="text"
                registerType={{
                  required: "This is required!",
                }}
                placeholder="City"
                paddingY={1}
                errorMessage={errors.city?.message}
              />

              <div className="w-4/5 md:w-7/12">
                <label htmlFor="role">Role</label>
                <span className="flex hover:border-gray-400 duration-200 bg-transparent rounded-md border-gray-300 border-[1px] px-2 py-1">
                  <select
                    {...register("role")}
                    className="w-full focus:outline-none bg-transparent"
                  >
                    <option value="Male" className="dark:bg-darkBG">
                      Seller
                    </option>
                    <option value="Female" className="dark:bg-darkBG">
                      Customer
                    </option>
                  </select>
                </span>
                <p className="text-red-500 text-sm">{errors.role?.message}</p>
              </div>
            </div>

            <Input
              id="address"
              titleLabel="Address"
              inputType="text"
              registerType={{
                required: "This is required!",
              }}
              placeholder="Address"
              paddingY={1}
              errorMessage={errors.address?.message}
            />

            <div className="w-4/5 md:w-7/12">
              <label htmlFor="password">Password</label>
              <span className="flex hover:border-gray-400 duration-200 bg-transparent rounded-md border-gray-300 border-[1px] px-2 py-1">
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
                  className="cursor-pointer scale-90"
                  alt=""
                />
              </span>
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            <div className="flex justify-start w-4/5 md:w-7/12 gap-2 mt-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="text-xs sm:text-sm text-justify">
                Yes, I understand and agree to the given {""}
                <Link href="" className="underline">
                  Terms of Service
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="rounded-md cursor-pointer mt-2 bg-gray-900 hover:bg-gray-800 p-2 text-white w-4/5 md:w-7/12 duration-200"
            >
              Create account
            </button>
          </form>
        </FormProvider>

        <button className="flex items-center justify-center gap-3 mt-2 rounded-md cursor-pointer border-[1px] hover:border-gray-400 border-gray-300 p-2 w-4/5 md:w-7/12 duration-200">
          <Image className="w-5" src={GoogleIcon} alt="" />
          <span>Continue with Google</span>
        </button>

        <span className="flex gap-2 mt-2">
          <h3 className="text-gray-600">Already have an account ?</h3>
          <Link className="hover:underline" href="/login">
            Login
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
