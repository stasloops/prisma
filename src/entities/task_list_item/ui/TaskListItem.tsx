import { FC } from "react";
import { useCollaps } from "shared/hooks";
import { ITask } from "shared/store/tasks/types";
import { AdditionalInformation } from "./AdditionalInformation";
import { PreviewInformation } from "./PreviewInformation";

interface TaskListItemProps {
  task: ITask;
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
      style={{ ...collaps_styles }}
      className="mb-2.5 rounded-xl"
    >
      <div style={{ ...preview_styles }} ref={preview_ref}>
        <PreviewInformation title={task.title} difficulty={task.difficulty} toggle={toggle} />
      </div>
      <div style={{ ...additional_styles }} ref={additional_ref}>
        <AdditionalInformation task={task} />
      </div>
    </div>
  );
};
