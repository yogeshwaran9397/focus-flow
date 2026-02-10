import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { selectSortedTasks, selectTasksLoading } from "../../features/tasks/selectors";
import Loader from "../common/Loader";

const TaskList = () => {
  const sortedTasks = useSelector(selectSortedTasks);
  const loading = useSelector(selectTasksLoading);

  if (loading) {
    return <Loader message="Loading tasks..." />;
  }

  if (sortedTasks.length === 0) {
    return (
      <div style={styles.emptyState}>
        <p style={styles.emptyText}>No tasks yet. Create your first task!</p>
      </div>
    );
  }

  return (
    <div style={styles.taskList}>
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

const styles = {
  taskList: {
    marginTop: "1.5rem"
  },
  emptyState: {
    textAlign: "center",
    padding: "3rem",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    marginTop: "1.5rem"
  },
  emptyText: {
    color: "#6b7280",
    fontSize: "1rem"
  }
};

export default TaskList;
