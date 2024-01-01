import { FC } from "react";
import { useCollaps } from "shared/hooks/useCollaps";
import { ITaskListItem } from "../types";
import { AdditionalInformation } from "./AdditionalInformation";
import { PreviewInformation } from "./PreviewInformation";

interface TaskListItemProps {
  task: ITaskListItem;
}
export const TaskListItem: FC<TaskListItemProps> = ({ task }) => {
  const {
    toggle,
    preview_ref,
    additional_ref,
    collaps_styles,
    additional_styles,
    preview_styles,
  } = useCollaps();

  return (
    <div
      onClick={toggle}
      style={{ ...collaps_styles }}
      className="mb-2.5 rounded-xl"
    >
      <div style={{ ...preview_styles }} ref={preview_ref}>
        <PreviewInformation title={task.title} difficulty={task.difficulty} />
      </div>
      <div style={{ ...additional_styles }} ref={additional_ref}>
        <AdditionalInformation />
      </div>
    </div>
  );
};
