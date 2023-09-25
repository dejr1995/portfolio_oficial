import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";
import Sidenav from "./components/Sidenav";
import "../src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRoutes />
      <Sidenav />
      
    </BrowserRouter>
  </React.StrictMode>
);
