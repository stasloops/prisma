import create from "zustand";
import { persist } from "zustand/middleware";
import { ITask } from "./types";

interface Store {
  tasks: ITask[];
  create: (newTask: ITask) => void;
  deleteById: (id: string) => void;
}

const tasksStore = persist<Store>(
  (set, get) => ({
    tasks: [],
    create: (newTask) => set(() => ({ tasks: [newTask, ...get().tasks] })),
    deleteById: (id) =>
      set(() => ({ tasks: get().tasks.filter((task) => task.id !== id) })),
  }),
  {
    name: "tasks-storage",
  }
);

export const useTasksStore = create<Store, [["zustand/persist", Store]]>(
  tasksStore
);
