import { ChangeEvent, FC, useEffect } from "react";

interface InputProps {
  onChange: (value: number) => void;
  value: number;
  placeholder?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
}

export const InputNumber: FC<InputProps> = ({
  onChange,
  value,
  placeholder,
  min,
  max,
  defaultValue,
}) => {
  useEffect(() => {
    if (defaultValue) {
      onChange(defaultValue);
    }
  }, []);

  useEffect(() => {
    if (max && value > max) {
      onChange(max);
    }
    if (min && value < min) {
      onChange(min);
    }
  }, [value, max, min, onChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const numericValue = input.replace(/\D/g, ""); // Allow only digits
    onChange(Number(numericValue));
  };

  return (
    <input
      className="box-border bg-second_bg w-full px-4 py-2 rounded-xl border-solid border-4 border-[rgba(0,0,0,0.0)] focus:border-primary outline-none"
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      min={min}
      max={max}
    />
  );
};
