import create from "zustand";
import { persist } from "zustand/middleware";
import { ITask } from "./types";

interface Store {
  tasks: ITask[];
  create: (task: ITask) => void;
}

const tasksStore = persist<Store>(
  (set, get) => ({
    tasks: [],
    create: (task) => set(() => ({ tasks: [task, ...get().tasks] })),
  }),
  {
    name: "tasks-storage",
  }
);

export const useTasksStore = create<Store, [["zustand/persist", Store]]>(
  tasksStore
);
