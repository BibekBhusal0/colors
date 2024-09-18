import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeProvider from "./theme/Provider.tsx";
import { Provider } from "react-redux";
import { store } from "./theme/redux.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider className="px-4">
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
