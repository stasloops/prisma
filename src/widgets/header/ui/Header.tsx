import { Avatar } from "shared/ui/Avatar";
import { Balance } from "shared/ui/Balance";
import { Diamond } from "shared/ui/diamond/Diamond";

export const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full px-5 py-4 bg-primary_bg">
        <div className="flex justify-between items-center">
          <div className="pl-2">
            <Diamond />
          </div>
          <div className="flex items-center gap-3">
            <Avatar />
            <Balance value={329} />
          </div>
        </div>
      </header>
    </>
  );
};
