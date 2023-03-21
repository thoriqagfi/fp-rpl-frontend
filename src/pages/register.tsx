import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

import Input from "@/components/input/Input";
import SelectInput from "@/components/input/SelectInput";
import { RegisterForm } from "@/types/register";

import EcomerceImage from "public/4k.jpg";
import GoogleIcon from "public/google-icon.svg";

export default function Login() {
  const router = useRouter();
  const methods = useForm<RegisterForm>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = methods;

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: undefined,
        city: '',
        address: '',
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
              // router.push("#")
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
                  required: "First Name is required!",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required",
                  },
                }}
                placeholder="First Name"
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
                errorMessage={errors.city?.message}
              />
              <SelectInput
                id="role"
                titleLabel="Role"
                registerType={{
                  required: "This is required!",
                }}
                options={['Seller', 'Customer']}
              />
            </div>

            <Input
              id="address"
              titleLabel="Address"
              inputType="text"
              registerType={{
                required: "This is required!",
              }}
              placeholder="Address"
              errorMessage={errors.address?.message}
            />

            <Input
              id="password"
              titleLabel="Password"
              inputType="password"
              registerType={{
                required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  }
              }}
              placeholder="Password"
              errorMessage={errors.password?.message}
            />

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
