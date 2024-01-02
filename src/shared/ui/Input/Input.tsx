import { ChangeEvent, FC } from "react";

interface InputProps {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({ onChange, value, placeholder }) => {
  return (
    <input
      className="box-border bg-second_bg w-full px-4 py-2 rounded-xl border-solid border-4 border-[rgba(0,0,0,0.0)] focus:border-primary outline-none"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
