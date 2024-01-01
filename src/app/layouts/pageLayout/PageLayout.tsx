import React, { FC } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}
const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return <div className="py-[75px] px-2.5">{children}</div>;
};

export default PageLayout;
