import { useState, useEffect } from "react";

/**
 * A custom hook that syncs state with localStorage.
 * Follows industry standards for reusability and error handling.
 * 
 * @param {string} key - The localStorage key
 * @param {any} initialValue - The initial value if nothing is in local storage
 * @returns {[any, Function]} - The state and a setter function
 */
const useLocalStorage = (key, initialValue) => {
  // Get initial state
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Sync with localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
