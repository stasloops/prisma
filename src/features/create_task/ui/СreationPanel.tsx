import React, { FC, useEffect, useState } from "react";
import { Icon } from "shared/ui/icon/Icon";
import { Input } from "shared/ui/input/Input";
import crystal from "shared/assets/Gelatin_Crystal.png";
import { InputNumber } from "shared/ui/input_number/InputNumber";
import { Difficulty, DIFFICULTY_COLORS } from "entities/task_list_item";
import { useTasksStore } from "shared/store/tasks/tasks";

interface СreationPanelProps {
  toggle: () => void;
}
export const СreationPanel: FC<СreationPanelProps> = ({ toggle }) => {
  const [title, setTitle] = useState<string>("");
  const [reward, setReward] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [difficultyList, setDifficultyList] = useState<Difficulty[]>([]);
  const create = useTasksStore((state) => state.create);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleReward = (value: number) => {
    setReward(value);
  };

  useEffect(() => {
    setDifficultyList(Object.values(Difficulty));
  }, []);

  const addNewTask = () => {
    const taskData = {
      id: String(Date.now()),
      title: title,
      difficulty: difficulty,
      reward: { crystals: reward },
    };
    create(taskData);
    toggle();
  };

  return (
    <div className="mt-5">
      <div className="mb-5">
        <div className="mb-2 text-title_sm">Название</div>
        <Input
          placeholder="Победить дракона"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="mb-5">
        <div className="mb-2 text-title_sm">Награда</div>
        <div className="flex items-center gap-2 max-w-[50%]">
          <Icon icon={crystal} width={20} />
          <InputNumber
            onChange={handleReward}
            value={reward}
            max={2000}
            defaultValue={100}
          />
        </div>
      </div>
      <div className="mb-5">
        <div className="mb-3 text-title_sm">Сложность</div>
        <div className="mb-4">
          <span
            style={{ backgroundColor: DIFFICULTY_COLORS[difficulty] }}
            className="px-2 py-1 rounded-xl"
          >
            {difficulty}
          </span>
        </div>
        <div className="flex gap-2">
          {difficultyList
            .filter((f) => f !== difficulty)
            .map((item) => (
              <div
                key={item}
                onClick={() => setDifficulty(item)}
                style={{ backgroundColor: DIFFICULTY_COLORS[item] }}
                className="px-2 py-1 rounded-xl"
              >
                {item}
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-10 bg-second_bg py-4 rounded-xl">
        <button className="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Добавить шаблон
        </button>
        <button
          onClick={addNewTask}
          className="bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Создать
        </button>
      </div>
    </div>
  );
};
