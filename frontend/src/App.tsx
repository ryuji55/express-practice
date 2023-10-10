import { memo } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

const App = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
});

export default App;
