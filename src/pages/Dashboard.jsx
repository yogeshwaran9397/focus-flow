import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/layout/DashboardLayout";
import { selectCompletedTasks, selectPendingTasks } from "../features/tasks/selectors";

const Dashboard = () => {
  const completedTasks = useSelector(selectCompletedTasks);
  const pendingTasks = useSelector(selectPendingTasks);
  const allTasks = useSelector((state) => state.tasks.list);

  const stats = [
    {
      title: "Total Tasks",
      value: allTasks.length,
      icon: "📋",
      color: "#3b82f6"
    },
    {
      title: "Pending",
      value: pendingTasks.length,
      icon: "⏳",
      color: "#f59e0b"
    },
    {
      title: "Completed",
      value: completedTasks.length,
      icon: "✅",
      color: "#10b981"
    },
    {
      title: "Completion Rate",
      value: allTasks.length > 0
        ? `${Math.round((completedTasks.length / allTasks.length) * 100)}%`
        : "0%",
      icon: "📊",
      color: "#8b5cf6"
    }
  ];

  return (
    <DashboardLayout>
      <div style={styles.container}>
        <h1 style={styles.pageTitle}>Dashboard</h1>
        <p style={styles.subtitle}>Overview of your productivity</p>

        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <div style={styles.statIcon}>{stat.icon}</div>
              <div style={styles.statContent}>
                <p style={styles.statTitle}>{stat.title}</p>
                <h2 style={{ ...styles.statValue, color: stat.color }}>
                  {stat.value}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Quick Actions</h2>
          <div style={styles.actionsGrid}>
            <a href="/tasks" style={styles.actionCard}>
              <span style={styles.actionIcon}>✅</span>
              <span style={styles.actionText}>Manage Tasks</span>
            </a>
            <div style={styles.actionCard}>
              <span style={styles.actionIcon}>⏰</span>
              <span style={styles.actionText}>Focus Timer</span>
            </div>
            <div style={styles.actionCard}>
              <span style={styles.actionIcon}>📈</span>
              <span style={styles.actionText}>View Reports</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const styles = {
  container: {
    maxWidth: "1200px"
  },
  pageTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "0.5rem"
  },
  subtitle: {
    color: "#6b7280",
    marginBottom: "2rem"
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem"
  },
  statCard: {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    gap: "1rem"
  },
  statIcon: {
    fontSize: "2.5rem"
  },
  statContent: {
    flex: 1
  },
  statTitle: {
    fontSize: "0.875rem",
    color: "#6b7280",
    marginBottom: "0.25rem"
  },
  statValue: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: 0
  },
  section: {
    marginTop: "2rem"
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "1rem"
  },
  actionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem"
  },
  actionCard: {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
    textDecoration: "none",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s"
  },
  actionIcon: {
    fontSize: "2rem"
  },
  actionText: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#1f2937"
  }
};

export default Dashboard;
