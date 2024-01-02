
import create from "zustand";
import { persist } from "zustand/middleware";
import { IUser } from "./types";

interface Store {
  user: IUser;
  incrementCrystals: (crystals: number) => void;
}

const userStore = persist<Store>(
  (set, get) => ({
    user: { crystals: 0 },
    incrementCrystals: (crystals) => set(() => ({user: {...get().user, crystals: get().user?.crystals + crystals}}))
  }),
  {
    name: "user-storage",
  }
);

export const useUserStore = create<Store, [["zustand/persist", Store]]>(
  userStore
);
