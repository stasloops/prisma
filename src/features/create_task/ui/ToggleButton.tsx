import { FC } from "react";

interface ButtonProps {
  toggle: () => void;
  isActive: boolean;
}

export const ToggleButton: FC<ButtonProps> = ({ toggle, isActive }) => {
  return (
    <div
      onClick={toggle}
      style={{background: 'linear-gradient(98deg, rgba(238,49,252,1) 0%, rgba(207,190,225,1) 37%, rgba(60,206,179,1) 92%)'}}
      className="flex justify-center items-center gap-2 py-3  rounded-xl font-bold"
    >
      <div style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}} className="text-xl">{isActive ? "Отменить" : "Создать"}</div>
    </div>
  );
};
