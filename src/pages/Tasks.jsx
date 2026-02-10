import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../components/layout/DashboardLayout";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import Error from "../components/common/Error";
import { fetchTasks } from "../features/tasks/taskThunks";

const Tasks = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchTasks());
  };

  return (
    <DashboardLayout>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.pageTitle}>Tasks</h1>
          <p style={styles.subtitle}>Manage your tasks and boost productivity</p>
        </div>

        <TaskForm />

        {error && (
          <Error message={error} onRetry={handleRetry} />
        )}

        <TaskList />
      </div>
    </DashboardLayout>
  );
};

const styles = {
  container: {
    maxWidth: "900px"
  },
  header: {
    marginBottom: "2rem"
  },
  pageTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "0.5rem"
  },
  subtitle: {
    color: "#6b7280"
  }
};

export default Tasks;
