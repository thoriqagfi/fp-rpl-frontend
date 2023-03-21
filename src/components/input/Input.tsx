import { useFormContext } from "react-hook-form";

import { InputProps } from "@/types/input";

export default function Input({
  id,
  titleLabel,
  inputType,
  registerType,
  placeholder,
  errorMessage,
  paddingY = 2,
  showPassword = false,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [show, setShow] = React.useState(false);
  return (
    <div className="w-4/5 md:w-7/12 h-20">
      <label htmlFor={inputType}>{titleLabel}</label>
      <span
        className={`flex bg-white rounded-md border-gray-300 hover:border-gray-400 border-[1px] px-2 py-2`}
      >
        <input
          {...rest}
          {...register(id, registerType)}
          type={id == 'password' ? (show ? "text" : "password") : inputType}
          placeholder={placeholder}
          className="w-full focus:placeholder:opacity-0 focus:outline-none bg-transparent"
        />
        {id == 'password' && (
          <div
            className="mx-auto my-auto cursor-pointer"
            onClick={() => {
              setShow(!show);
            }}>
            {show ?
              <AiFillEyeInvisible className="text-gray-500 hover:text-gray-600" />
              :
              <AiFillEye className="text-gray-500 hover:text-gray-600" />
            }
          </div>
        )}
      </span>
      <p className="text-red-500 text-[11px]">{errorMessage}</p>
    </div>
  );
}
