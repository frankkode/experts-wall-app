import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={2000}
          closeOnClick
          pauseOnHover={false}
        />
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
