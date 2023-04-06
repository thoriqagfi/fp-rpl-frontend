import * as React from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast, {Toaster} from "react-hot-toast";

import useAuthStore from "@/store/AuthStore";
import Input from "@/components/input/Input";
import { LoginForm } from "@/types/loginForm";
import { getToken } from "@/lib/token";

import EcomerceImage from "public/4k.jpg";
import GoogleIcon from "public/google-icon.svg";
import { setToken } from "@/lib/token";
import { apiMock } from "@/lib/apiMock";

export default function Login() {
  const router = useRouter();
  const [role, setRole] = React.useState<string>('customer');
  const { login, isAuthenticated, user } = useAuthStore();
  const { mutate, isSuccess, isError, isLoading } = useMutation(
    async ({ email, password }: LoginForm) => {
      await toast.promise(
       apiMock.post(`https://fp-rpl-backend-api-production.up.railway.app/${role}/login`, {email, password})
      .then( async (res) => {
        console.log(res)
        const data = res.data.data;
        setToken('token', data.token);

        const user = await apiMock.get(`https://fp-rpl-backend-api-production.up.railway.app/${role}/profile`, {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })
        login({
          id: user.data.data.id,
          first_name: user.data.data.first_name,
          last_name: user.data.data.last_name,
          email: user.data.data.email,
          no_telp: user.data.data.no_telp,
          city: user.data.data.city,
          role: user.data.data.role,
          address: user.data.data.address,
          token: data.token,
          password: user.data.data.password
        })
        setTimeout(() => {
          router.push('/')
        }, 2000)
      }),
      {
        success: 'Login Successful',
        loading: 'Loading...',
        error: (e) => {
          return <p>
            {e.response ? e.response.data.message : 'Something went wrong'}
          </p>;
        }
      }
    )}
  )
  const onSubmit = ({email, password}: LoginForm) => {
    mutate({email, password});
  }

  const methods = useForm<LoginForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    }
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
        email: "",
        password: "",
      });
    }
  }, [formState, reset]);

  return (
    <section className="min-h-screen w-full bg-white p-6 text-black flex justify-center items-center font-poppins">
      <Toaster/>
      <div className="flex flex-col min-h-[93vh] w-full md:w-[55%] rounded-2xl items-center justify-center">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`flex flex-col gap-y-4 w-full items-center justify-center`}
          >
            <span className="flex flex-col items-center">
              <h2 className="font-semibold text-[40px]">Welcome Back</h2>
              <h3 className=" text-gray-400 mb-2">
                Please enter your contact detail to connect
              </h3>
            </span>

            <h1 className="font-bold">Choose Your Role :</h1>
            <div className="flex justify-evenly w-1/2">
              <div
                className={role === 'customer' ? 'bg-slate-300 hover:bg-slate-500 cursor-pointer px-7 py-2 rounded-lg' : 'bg-white hover:bg-slate-500 cursor-pointer px-7 py-2 rounded-lg'} onClick={() => {
                  role === 'customer' ? setRole('') : setRole('customer')
                }}
              >
                <p>Customer</p>
              </div>
              <div className={role === 'seller' ? 'bg-slate-300 hover:bg-slate-500 cursor-pointer px-12 py-2 rounded-lg' : 'bg-white hover:bg-slate-500 cursor-pointer px-12 py-2 rounded-lg'} onClick={() => {
                  role === 'seller' ? setRole('') : setRole('seller')
                }}>
                <p>Seller</p>
              </div>
              <div className={role === 'admin' ? 'bg-slate-300 hover:bg-slate-500 cursor-pointer px-12 py-2 rounded-lg' : 'bg-white hover:bg-slate-500 cursor-pointer px-12 py-2 rounded-lg'} onClick={() => {
                  role === 'admin' ? setRole('') : setRole('admin')
                }}>
                <p>Admin</p>
              </div>
            </div>

            <Input
              id="email"
              titleLabel="Email Address"
              inputType="email"
              registerType={{
                required: "Email is required!",
                pattern: {
                  value: /^\S+@\S+[.]+\S/i,
                  message: "Invalid Email address",
                },
              }}
              placeholder="Email"
              errorMessage={errors.email?.message}
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
