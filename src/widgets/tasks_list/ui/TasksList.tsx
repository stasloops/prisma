import {
  Difficulty,
  TaskListItem,
  ITaskListItem,
} from "entities/task_list_item";
import { CreateTask } from "features/create_task";

const MOCK_TASKS: ITaskListItem[] = [
  { id: "1", title: "Победить дракона", difficulty: Difficulty.HARD },
  { id: "2", title: "Победить дракона", difficulty: Difficulty.EASY },
  { id: "3", title: "Победить дракона", difficulty: Difficulty.HARD },
  { id: "4", title: "Победить дракона", difficulty: Difficulty.MEDIUM },
  { id: "5", title: "Победить дракона", difficulty: Difficulty.HARD },
  { id: "6", title: "Победить дракона", difficulty: Difficulty.HARD },
  { id: "7", title: "Победить дракона", difficulty: Difficulty.MEDIUM },
  { id: "8", title: "Победить дракона", difficulty: Difficulty.EASY },
];

export const TasksList = () => {
  return (
    <div className="mt-4">
      <CreateTask />
      <div>
        {MOCK_TASKS.map((task: ITaskListItem) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
