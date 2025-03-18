import { AppProvider, Button } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./Playground";
// import App from "./App";
// import App from "./EmptyState";
// import App from "./Optmized";
// import App from "./Unoptimized";
// import App from "./IndexTable";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Button loading onClick={() => alert("clicked")}>
        Click me
      </Button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </React.StrictMode>
);
