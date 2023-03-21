import { RegisterOptions } from "react-hook-form";

export type InputProps = {
  id: string;
  titleLabel: string;
  inputType: string;
  registerType: RegisterOptions;
  placeholder: string;
  errorMessage?: string;
  paddingY: number;
} & React.ComponentPropsWithoutRef<"input">;