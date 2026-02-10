# FocusFlow - Phase 1

Smart Productivity & Task Intelligence App built with React, Redux Toolkit, and modern best practices.

## 🚀 Features

- ✅ Task Management (CRUD operations)
- 🔐 Authentication System (Mock)
- 📊 Dashboard with Statistics
- 🎯 Priority-based Task Sorting
- ⚡ Redux Toolkit for State Management
- 🔄 Async Operations with Thunks
- 🎨 Clean, Modern UI
- 📱 Responsive Design

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Redux Toolkit** - State Management
- **React Router v6** - Routing
- **Axios** - HTTP Client
- **React Hooks** - Modern React Patterns

## 📂 Project Structure

```
src/
├── api/                    # API layer with Axios
├── app/                    # Redux store configuration
├── features/               # Redux features (auth, tasks)
├── components/             # React components
│   ├── common/            # Reusable components
│   ├── layout/            # Layout components
│   └── tasks/             # Task-specific components
├── pages/                  # Page components
├── mock-db/               # Mock database (JSON)
├── hooks/                 # Custom React hooks
├── utils/                 # Utility functions
├── App.jsx               # Main App component
└── index.js              # Entry point
```

## 🏃 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Login Credentials

Use the following credentials to login:

- **Username:** admin

## 📋 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎯 Phase 1 Goals Completed

✅ Solid React foundation with functional components
✅ Redux Toolkit with async flows (createAsyncThunk)
✅ API-like structure using local JSON data
✅ Clean, industry-standard folder structure
✅ Production-ready patterns and best practices
✅ Loading and error handling
✅ Modular architecture
✅ Backend-ready design

## 🔮 Phase 2 (Future Enhancements)

- Real backend integration (.NET or Node.js)
- Database persistence
- JWT authentication
- React Query optimization
- Charts and analytics
- Focus timer with Pomodoro technique
- Notifications
- Dark mode
- User preferences
- Export functionality

## 📚 Key Concepts Demonstrated

### Redux Toolkit

- Store configuration with `configureStore`
- Slice creation with `createSlice`
- Async operations with `createAsyncThunk`
- Memoized selectors with `createSelector`

### React Best Practices

- Functional components with hooks
- Component composition
- Protected routes
- Form handling
- Conditional rendering
- Performance optimization with useMemo

### State Management

- Centralized state with Redux
- Async state handling (loading, error, success)
- Normalized state structure
- Reusable selectors

### Code Organization

- Feature-based folder structure
- Separation of concerns
- Reusable components
- Custom hooks
- Utility functions

## 📝 Notes

This is Phase 1 of the FocusFlow project, focusing on frontend architecture and patterns. The application uses mock data (JSON files) to simulate API calls, making it easy to understand the data flow and replace with real API endpoints in Phase 2.

## 📄 License

MIT License - feel free to use for learning purposes.
