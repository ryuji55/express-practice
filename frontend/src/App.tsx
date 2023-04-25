import { memo } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./router";

const App = memo(() => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
});

export default App;
