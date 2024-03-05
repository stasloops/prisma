import create from "zustand";

interface Store {
  popupIsActive: boolean;
  closePopup: () => void;
  action: () => void;
  openPopup: (action: () => void) => void;
}

export const usePopupStore = create<Store>((set) => ({
  popupIsActive: false,
  action: () => {},
  openPopup: (action) => {
    setTimeout(() => {
      set(() => ({ popupIsActive: true, action: action }));
    });
  },
  closePopup: () => set(() => ({ popupIsActive: false })),
}));
