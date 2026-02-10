import React from "react";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <span style={styles.icon}>⚠️</span>
      </div>
      <h3 style={styles.title}>Error</h3>
      <p style={styles.message}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} style={styles.button}>
          Try Again
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center"
  },
  iconContainer: {
    marginBottom: "1rem"
  },
  icon: {
    fontSize: "3rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#ef4444",
    marginBottom: "0.5rem"
  },
  message: {
    color: "#6b7280",
    marginBottom: "1rem"
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500"
  }
};

export default Error;
