/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

// Initial state for the authentication context
const initial_state = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || "",
  role: localStorage.getItem("role") || "",
};

// Create the authentication context
export const AuthContext = createContext(initial_state);

// Reducer function for handling authentication state changes
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      // Set state for login start
      return {
        user: null,
        token: "",
        role: "",
      };
    case "LOGIN_SUCCESS":
      // Set state for login success
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "LOGIN_FAILURE":
      // Set state for login failure
      return {
        user: null,
        token: "",
        role: "",
      };
    case "LOGOUT":
      // Clear user data from local storage and set state for logout
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      return {
        user: null,
        token: "",
        role: "",
      };
    default:
      // Default case: return current state
      return state;
  }
};

// AuthContextProvider component to wrap the entire application
export const AuthContextProvider = ({ children }) => {
  // Use the reducer to manage authentication state
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  // Effect to store authentication data in local storage when state changes
  useEffect(() => {
    try {
      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", state.token);
      localStorage.setItem("role", state.role);
    } catch (error) {
      // Log errors during local storage update
      console.error("Error storing data in local storage:", error);
    }
  }, [state]);

  // Provide the authentication state and dispatch function to the context
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
