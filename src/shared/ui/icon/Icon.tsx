import { FC } from "react";

interface IconProps {
  icon: string;
  width?: number;
}
export const Icon: FC<IconProps> = ({ icon, width }) => {
  return <img src={icon} style={{ width: `${width}px` }} />;
};
