import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../features/tasks/taskThunks";

const TaskForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert("Please enter a task title");
      return;
    }

    dispatch(createTask(formData));
    setFormData({ title: "", priority: "Medium" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title..."
          style={styles.input}
          disabled={loading}
        />
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          style={styles.select}
          disabled={loading}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button
          type="submit"
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Task"}
        </button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
  },
  formGroup: {
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  },
  input: {
    flex: 1,
    padding: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    outline: "none"
  },
  select: {
    padding: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    backgroundColor: "white",
    cursor: "pointer",
    outline: "none"
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s"
  }
};

export default TaskForm;
