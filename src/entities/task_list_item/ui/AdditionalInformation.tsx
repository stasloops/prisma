import { FC } from "react";
import crystal from "shared/assets/Gelatin_Crystal.png";
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
  const incrementCrystals = useUserStore((state) => state.incrementCrystals);
  const deleteById = useTasksStore((state) => state.deleteById);

  const completeTask = () => {
    deleteById(task.id);
    incrementCrystals(task.reward?.crystals || 0);
  };

  const removeTask = () => {
    deleteById(task.id);
  }

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
          onClick={removeTask}
          className="bg-red-500 px-4 py-2 rounded-xl font-bold"
        >
          Удалить
        </button>
        <button
          onClick={completeTask}
          className="bg-green-400 px-4 py-2 rounded-xl font-bold"
        >
          Завершить
        </button>
      </div>
    </div>
  );
};
