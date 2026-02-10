import React, { useState, useEffect } from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authThunks";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

    const [username, setUsername] = useState("");

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");

        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username.trim()) {
            alert("Please enter a username");
            return;
        }

        dispatch(loginUser({ username }));
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>FocusFlow</h1>
                <p style={styles.subtitle}>Smart Productivity & Task Intelligence</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username (e.g., admin)"
                            style={styles.input}
                            disabled={loading}
                        />
                    </div>

                    {error && (
                        <div style={styles.error}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        style={styles.button}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p style={styles.hint}>
                    💡 Hint: Use <strong>admin</strong> as username
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6"
    },
    card: {
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "0.5rem",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px"
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#1f2937",
        marginBottom: "0.5rem",
        textAlign: "center"
    },
    subtitle: {
        color: "#6b7280",
        textAlign: "center",
        marginBottom: "2rem",
        fontSize: "0.875rem"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
    },
    label: {
        fontSize: "0.875rem",
        fontWeight: "500",
        color: "#374151"
    },
    input: {
        padding: "0.75rem",
        border: "1px solid #d1d5db",
        borderRadius: "0.375rem",
        fontSize: "0.875rem",
        outline: "none"
    },
    error: {
        padding: "0.75rem",
        backgroundColor: "#fee2e2",
        color: "#dc2626",
        borderRadius: "0.375rem",
        fontSize: "0.875rem"
    },
    button: {
        padding: "0.75rem",
        backgroundColor: "#3b82f6",
        color: "white",
        border: "none",
        borderRadius: "0.375rem",
        fontSize: "0.875rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "background-color 0.2s"
    },
    hint: {
        marginTop: "1rem",
        fontSize: "0.75rem",
        color: "#6b7280",
        textAlign: "center"
    }
};

export default Login;
