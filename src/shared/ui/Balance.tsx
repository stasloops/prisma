import { FC } from "react";

interface BalanceProps {
  value: number;
  icon: string;
}
export const Balance: FC<BalanceProps> = ({ value, icon}) => {
  return (
    <div className="gap-2 flex items-center text-lg">
      <div className="">
        <img src={icon} className="w-[20px]" />
      </div>
      <div className="font-bold ">{value || 0}</div>
    </div>
  );
};
