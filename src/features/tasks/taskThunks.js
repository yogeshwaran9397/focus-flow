import { createAsyncThunk } from "@reduxjs/toolkit";
import { taskApi } from "../../api/taskApi";

export const fetchTasks = createAsyncThunk(
  "tasks/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const tasks = await taskApi.fetchTasks();
      return tasks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createTask = createAsyncThunk(
  "tasks/create",
  async (taskData, { rejectWithValue }) => {
    try {
      const newTask = await taskApi.createTask(taskData);
      return newTask;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/update",
  async ({ id, taskData }, { rejectWithValue }) => {
    try {
      const updatedTask = await taskApi.updateTask(id, taskData);
      return updatedTask;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (id, { rejectWithValue }) => {
    try {
      await taskApi.deleteTask(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
