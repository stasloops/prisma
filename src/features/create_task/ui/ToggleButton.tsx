import { FC } from "react";

interface ButtonProps {
  toggle: () => void;
  isActive: boolean;
}

export const ToggleButton: FC<ButtonProps> = ({ toggle, isActive }) => {
  return (
    <div
      onClick={toggle}
      className="flex justify-center items-center gap-2 py-3 bg-[#5ee77c] rounded-xl font-bold"
    >
      <div
        style={{ transform: `rotate(${isActive ? "45deg" : "0deg"})` }}
        className="text-xl transition-[1s] w-[28px] h-[28px]"
      >
        ➕
      </div>
      <div className="text-xl">{isActive ? "Отменить" : "Создать"}</div>
    </div>
  );
};
