import { RegisterOptions, useFormContext } from "react-hook-form";

type InputProps = {
  id: string;
  titleLabel: string;
  inputType: string;
  registerType: RegisterOptions;
  placeholder: string;
  errorMessage?: string;
  paddingY: number;
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  id,
  titleLabel,
  inputType,
  registerType,
  placeholder,
  errorMessage,
  paddingY,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-4/5 md:w-1/2">
      <label htmlFor={inputType}>{titleLabel}</label>
      <span
        className={`flex bg-transparent rounded-md border-gray-300 hover:border-gray-400 border-[1px] px-2 py-${paddingY}`}
      >
        <input
          type={inputType}
          // {...rest}
          {...register(id, registerType)}
          placeholder={placeholder}
          className="w-full focus:placeholder:opacity-0 focus:outline-none bg-transparent"
        />
      </span>
      <p className="text-red-500 text-sm">{errorMessage}</p>
    </div>
  );
}
