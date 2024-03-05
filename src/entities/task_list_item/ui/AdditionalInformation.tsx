import { FC } from "react";
import crystal from "shared/assets/Gelatin_Crystal.png";
import { usePopupStore } from "shared/store/popup/popup";
import { useTasksStore } from "shared/store/tasks/tasks";
import { ITask } from "shared/store/tasks/types";
import { useUserStore } from "shared/store/user/user";
import { Icon } from "shared/ui";

interface AdditionalInformationProps {
  task: ITask;
}

export const AdditionalInformation: FC<AdditionalInformationProps> = ({
  task,
}) => {
  const openPopup = usePopupStore((state) => state.openPopup);
  const incrementCrystals = useUserStore((state) => state.incrementCrystals);
  const deleteById = useTasksStore((state) => state.deleteById);

  const completeTask = () => {
    deleteById(task.id);
    incrementCrystals(task.reward?.crystals || 0);
  };

  const removeTask = () => {
    deleteById(task.id);
  };

  return (
    <div className="px-4 py-4 bg-primary_bg rounded-xl">
      <div>
        <div className="text-title_sm mb-1">Награда</div>
        <div className="flex items-center gap-1">
          <Icon icon={crystal} width={20} />
          <div className="font-bold text-xl">{task.reward?.crystals}</div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4 p-2 rounded-xl">
        <button
          onClick={() => openPopup(removeTask)}
          className="bg-red px-4 py-2 rounded-xl font-bold"
        >
          Удалить
        </button>
        <button
          onClick={() => openPopup(completeTask)}
          className="bg-green px-4 py-2 rounded-xl font-bold"
        >
          Завершить
        </button>
      </div>
    </div>
  );
};
