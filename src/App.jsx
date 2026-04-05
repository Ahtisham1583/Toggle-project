import React from "react";
import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const { isLogin } = useAuth();

  return <>{isLogin ? <Dashboard /> : <Login />}</>;
}

export default App;
