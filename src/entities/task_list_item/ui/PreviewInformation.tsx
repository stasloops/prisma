import { FC } from "react";
import { COLORS } from "../config/difficulty_colors";
import { Difficulty } from "../types";

interface PreviewInformationProps {
  title: string;
  difficulty: Difficulty;
}

export const PreviewInformation: FC<PreviewInformationProps> = ({
  title,
  difficulty,
}) => {
  return (
    <div className="w-full px-4 py-4 bg-second_bg flex justify-between rounded-xl">
      <h4>{title}</h4>
      <div
        style={{ backgroundColor: COLORS[difficulty] }}
        className="px-2 py-1 rounded-xl"
      >
        {difficulty}
      </div>
    </div>
  );
};
