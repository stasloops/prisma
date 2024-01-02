import { FC } from "react";
import { Difficulty } from "shared/store/tasks/types";
import { DIFFICULTY_COLORS } from "../config/difficulty_colors";

interface PreviewInformationProps {
  title: string;
  difficulty: Difficulty;
  toggle: () => void;
}

export const PreviewInformation: FC<PreviewInformationProps> = ({
  title,
  difficulty,
  toggle,
}) => {
  return (
    <div
      onClick={toggle}
      className="w-full px-4 py-4 bg-second_bg flex justify-between rounded-xl"
    >
      <h4>{title}</h4>
      <div
        style={{ backgroundColor: DIFFICULTY_COLORS[difficulty] }}
        className="px-2 py-1 rounded-xl"
      >
        {difficulty}
      </div>
    </div>
  );
};
