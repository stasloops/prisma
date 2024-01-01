import { ChangeEvent, FC } from "react";
import "./input.css";

interface InputProps {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({ onChange, value, placeholder }) => {
  return (
    <div 
    className="form-control"
    >
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="input input-alt"
        type="text"
      />
      <span className="input-border input-border-alt"></span>
    </div>
  );
};
