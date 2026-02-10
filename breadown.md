
# 📘 FocusFlow – Phase 1

## Smart Productivity & Task Intelligence App (React)

---

## 📌 Project Overview

**FocusFlow** is a modern productivity application focused on  **task management, focus tracking, and insights** .
Phase-1 focuses on  **frontend architecture, state management, API simulation, and scalability** , without a real backend database.

This phase is designed to:

* Apply **React + Redux Toolkit + Axios**
* Follow **industry-standard folder structure**
* Be **backend-ready** for Phase-2

---

## 🎯 Phase-1 Goals

✔ Solid React foundation
✔ Redux Toolkit with async flows
✔ API-like structure using local data
✔ Clean UI architecture
✔ Production-ready patterns

---

## 🧰 Tech Stack (Phase-1)

### Frontend

* React (Functional Components)
* Redux Toolkit
* Axios
* React Router
* React Hooks

### Data Layer

* Local JSON (mock DB)
* Axios interceptors (API simulation)

---

## 🧱 High-Level Architecture

```txt
UI Components
   ↓
Redux Actions (createAsyncThunk)
   ↓
Axios Service Layer
   ↓
Mock API (Local JSON / In-Memory)
   ↓
Redux Store
   ↓
UI Re-render
```

---

## 📂 Folder Structure

```txt
src/
│
├── api/
│   ├── axiosInstance.js
│   ├── taskApi.js
│   └── authApi.js
│
├── app/
│   └── store.js
│
├── features/
│   ├── auth/
│   │   ├── authSlice.js
│   │   └── authThunks.js
│   │
│   └── tasks/
│       ├── taskSlice.js
│       ├── taskThunks.js
│       └── selectors.js
│
├── components/
│   ├── layout/
│   │   ├── DashboardLayout.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── common/
│   │   ├── Loader.jsx
│   │   └── Error.jsx
│   │
│   └── tasks/
│       ├── TaskList.jsx
│       ├── TaskItem.jsx
│       └── TaskForm.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── Tasks.jsx
│
├── mock-db/
│   ├── users.json
│   └── tasks.json
│
├── hooks/
│   └── useFocusTimer.js
│
├── utils/
│   └── priorityCalculator.js
│
├── App.jsx
└── index.js
```

---

## 📦 Mock Database (Local JSON)

### `mock-db/tasks.json`

```json
[
  {
    "id": 1,
    "title": "Learn Redux Toolkit",
    "priority": "High",
    "completed": false
  }
]
```

### `mock-db/users.json`

```json
[
  {
    "id": 1,
    "username": "admin",
    "token": "mock-token-123"
  }
]
```

---

## 🌐 Axios Setup (API Simulation)

### `api/axiosInstance.js`

```js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/mock-api"
});

export default axiosInstance;
```

---

## 🧠 Redux Store Setup

### `app/store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import taskReducer from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer
  }
});
```

---

## 🔐 Auth Feature (Phase-1)

### Purpose

* Simulate login
* Store user info globally
* Prepare for JWT-based auth later

### `authThunks.js`

```js
import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../mock-db/users.json";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username }) => {
    const user = users.find(u => u.username === username);
    if (!user) throw new Error("Invalid user");
    return user;
  }
);
```

---

## 📋 Tasks Feature (CRUD)

### `taskThunks.js`

```js
import { createAsyncThunk } from "@reduxjs/toolkit";
import tasks from "../../mock-db/tasks.json";

export const fetchTasks = createAsyncThunk(
  "tasks/fetch",
  async () => {
    return tasks;
  }
);
```

---

### `taskSlice.js`

```js
import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./taskThunks";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default taskSlice.reducer;
```

---

## ⚡ Performance Optimization

### Priority Calculation

```js
export const calculatePriority = task => {
  return task.completed ? 0 : task.priority === "High" ? 3 : 1;
};
```

### useMemo

```js
const sortedTasks = useMemo(() => {
  return [...tasks].sort((a, b) =>
    calculatePriority(b) - calculatePriority(a)
  );
}, [tasks]);
```

---

## 🧩 Layout Pattern (Industry Standard)

```jsx
<DashboardLayout>
  <Sidebar />
  <Tasks />
</DashboardLayout>
```

Uses:

* `children`
* component composition
* fragments

---

## 🧪 Phase-1 Deliverables Checklist

✅ Login screen
✅ Task list screen
✅ Redux Toolkit setup
✅ Async thunks
✅ Loading & error handling
✅ Modular architecture
✅ Backend-ready design

---

## 🔮 Phase-2 (Future)

* Real backend (.NET / Node)
* Database integration
* JWT authentication
* React Query optimization
* Charts & analytics
* SaaS deployment

---

## 🧠 Resume-Ready Description

> Built an industry-standard React application using Redux Toolkit, Axios, and modern hooks. Implemented scalable architecture with async state handling, modular API layer, and performance optimizations. Designed backend-ready frontend with clean separation of concerns.

---

## 🚀 Next Steps (I can help you with)

1️⃣ Step-by-step implementation order
2️⃣ UI wireframe
3️⃣ Phase-2 backend design
4️⃣ Git commit strategy
5️⃣ Interview explanation walkthrough

👉 Tell me what you want next, and we’ll build this like a **real product** 💪
