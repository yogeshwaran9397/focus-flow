import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authThunks";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.header}>
        <h2 style={styles.logo}>FocusFlow</h2>
        {user && <p style={styles.username}>Welcome, {user.username}</p>}
      </div>

      <nav style={styles.nav}>
        <Link to="/dashboard" style={styles.navLink}>
          📊 Dashboard
        </Link>
        <Link to="/tasks" style={styles.navLink}>
          ✅ Tasks
        </Link>
      </nav>

      <div style={styles.footer}>
        <button onClick={handleLogout} style={styles.logoutButton}>
          🚪 Logout
        </button>
      </div>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#1f2937",
    color: "white",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0
  },
  header: {
    padding: "1.5rem",
    borderBottom: "1px solid #374151"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem"
  },
  username: {
    fontSize: "0.875rem",
    color: "#9ca3af"
  },
  nav: {
    flex: 1,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },
  navLink: {
    padding: "0.75rem 1rem",
    borderRadius: "0.375rem",
    textDecoration: "none",
    color: "white",
    transition: "background-color 0.2s",
    cursor: "pointer"
  },
  footer: {
    padding: "1rem",
    borderTop: "1px solid #374151"
  },
  logoutButton: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500"
  }
};

export default Sidebar;
