import axiosInstance from "./axiosInstance";

export const authApi = {
    login: async (credentials) => {
        // Simulating API call with mock data
        const users = await import("../mock-db/users.json");
        const user = users.default.find(u => u.username === credentials.username);

        if (!user) {
            throw new Error("Invalid credentials");
        }

        // Store token in localStorage
        localStorage.setItem("token", user.token);

        return user;
    },

    logout: async () => {
        // Simulate API call
        localStorage.removeItem("token");
        return { success: true };
    }
};
