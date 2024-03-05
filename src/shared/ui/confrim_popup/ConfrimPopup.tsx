import { useClose } from "shared/hooks";
import { usePopupStore } from "shared/store/popup/popup";

export const ConfrimPopup = () => {
  const closePopup = usePopupStore((state) => state.closePopup);
  const action = usePopupStore((state) => state.action);
  const { ref } = useClose(closePopup);

  const confrim = () => {
    action();
    closePopup();
  };
  
  return (
    <div className="fixed top-0 z-[100] w-[100vw] h-[100vh] bg-[#00000041] flex justify-center items-center">
      <div ref={ref} className="p-4 bg-second_bg rounded-xl">
        <div>Вы уверены что хотите продолжить?</div>
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={closePopup}
            className="bg-red px-4 py-2 rounded-xl font-bold"
          >
            Назад
          </button>
          <button
            onClick={confrim}
            className="bg-green px-4 py-2 rounded-xl font-bold"
          >
            Конечно
          </button>
        </div>
      </div>
    </div>
  );
};
