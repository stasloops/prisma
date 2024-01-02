import { lazy } from "react";

export const TasksAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./ui/Tasks")), 1000);
    })
);
