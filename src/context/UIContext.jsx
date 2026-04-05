import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UIContext = createContext();

const SIDEBAR_KEY = "ui_sidebar_open";

export const UIProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage(SIDEBAR_KEY, true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  
  const value = {
    isSidebarOpen,
    toggleSidebar,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};

export default UIProvider;
