import { Balance } from "shared/ui/Balance";
import { Diamond } from "shared/ui/diamond/Diamond";
import crystal from "shared/assets/Gelatin_Crystal.png";
import { useUserStore } from "shared/store/user/user";

export const Header = () => {
  const crystals = useUserStore((state) => state.user.crystals);
  return (
    <>
      <header className="fixed top-0 z-50 w-full px-5 py-4 bg-primary_bg">
        <div className="flex justify-between items-center">
          <div className="pl-2">
            <Diamond />
          </div>
          <div className="flex items-center gap-3">
            {/* <Avatar /> */}
            <Balance value={crystals} icon={crystal} />
          </div>
        </div>
      </header>
    </>
  );
};
