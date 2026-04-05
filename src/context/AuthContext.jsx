import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Create the context
const AuthContext = createContext();

const AUTH_STATE_KEY = "auth_state";

/**
 * AuthProvider component that provides authentication state including user info.
 */
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage(AUTH_STATE_KEY, {
    isLogin: false,
    user: null,
  });

  // Sync auth state across tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === AUTH_STATE_KEY) {
        try {
          const newState = JSON.parse(e.newValue);
          setAuth(newState);
        } catch (error) {
          console.error("Error parsing storage change:", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [setAuth]);

  /**
   * Action: Logs the user in with credentials
   */
  const login = (userData) => {
    setAuth({
      isLogin: true,
      user: userData,
    });
  };

  /**
   * Action: Logs the user out
   */
  const logout = () => {
    setAuth({
      isLogin: false,
      user: null,
    });
  };

  // Provide state and actions
  const value = {
    isLogin: auth.isLogin,
    user: auth.user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook for consuming the AuthContext.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
