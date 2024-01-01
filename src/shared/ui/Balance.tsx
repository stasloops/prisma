import { FC } from "react";

interface BalanceProps {
  value: number;
}
export const Balance: FC<BalanceProps> = ({value}) => {
  return (
    <div className="gap-2 flex text-lg ">
      <div className="">💵</div>
      <div className="font-bold ">{value || 0}</div>
    </div>
  );
};
