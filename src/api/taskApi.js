import axiosInstance from "./axiosInstance";

export const taskApi = {
  fetchTasks: async () => {
    // Simulating API call with mock data
    const tasks = await import("../mock-db/tasks.json");
    return tasks.default;
  },

  createTask: async (taskData) => {
    // Simulate API call
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false
    };
    return newTask;
  },

  updateTask: async (id, taskData) => {
    // Simulate API call
    return {
      id,
      ...taskData
    };
  },

  deleteTask: async (id) => {
    // Simulate API call
    return { id };
  }
};
