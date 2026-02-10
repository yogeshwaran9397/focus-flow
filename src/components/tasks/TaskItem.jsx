import React from "react";
import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../../features/tasks/taskThunks";
import { getPriorityColor } from "../../utils/priorityCalculator";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(updateTask({
      id: task.id,
      taskData: { ...task, completed: !task.completed }
    }));
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(task.id));
    }
  };

  return (
    <div style={{
      ...styles.taskItem,
      opacity: task.completed ? 0.6 : 1
    }}>
      <div style={styles.taskContent}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
          style={styles.checkbox}
        />
        <div style={styles.taskDetails}>
          <h4 style={{
            ...styles.taskTitle,
            textDecoration: task.completed ? "line-through" : "none"
          }}>
            {task.title}
          </h4>
          <span
            style={{
              ...styles.priorityBadge,
              backgroundColor: getPriorityColor(task.priority),
              opacity: task.completed ? 0.5 : 1
            }}
          >
            {task.priority}
          </span>
        </div>
      </div>
      <button onClick={handleDelete} style={styles.deleteButton}>
        🗑️
      </button>
    </div>
  );
};

const styles = {
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    marginBottom: "0.75rem",
    transition: "opacity 0.2s"
  },
  taskContent: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flex: 1
  },
  checkbox: {
    width: "20px",
    height: "20px",
    cursor: "pointer"
  },
  taskDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },
  taskTitle: {
    fontSize: "1rem",
    fontWeight: "500",
    color: "#1f2937",
    margin: 0
  },
  priorityBadge: {
    display: "inline-block",
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    fontWeight: "600",
    color: "white",
    width: "fit-content"
  },
  deleteButton: {
    padding: "0.5rem",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1.25rem",
    transition: "transform 0.2s"
  }
};

export default TaskItem;
