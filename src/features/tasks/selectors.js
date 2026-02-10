import { createSelector } from "@reduxjs/toolkit";
import { calculatePriority } from "../../utils/priorityCalculator";

export const selectAllTasks = (state) => state.tasks.list;
export const selectTasksLoading = (state) => state.tasks.loading;
export const selectTasksError = (state) => state.tasks.error;

export const selectSortedTasks = createSelector(
  [selectAllTasks],
  (tasks) => {
    return [...tasks].sort((a, b) => 
      calculatePriority(b) - calculatePriority(a)
    );
  }
);

export const selectCompletedTasks = createSelector(
  [selectAllTasks],
  (tasks) => tasks.filter(task => task.completed)
);

export const selectPendingTasks = createSelector(
  [selectAllTasks],
  (tasks) => tasks.filter(task => !task.completed)
);
