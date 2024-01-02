import { TaskListItem } from "entities/task_list_item";
import { CreateTask } from "features/create_task";
import { useTasksStore } from "shared/store/tasks/tasks";

export const TasksList = () => {
  const tasks = useTasksStore((state) => state.tasks);
  return (
    <div className="mt-4">
      <CreateTask />
      <div className="mt-8">
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
