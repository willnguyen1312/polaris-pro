import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import ReactDOM from "react-dom/client";
import { Playground } from "./Playground";
// import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <AppProvider i18n={enTranslations}>
    <Playground />
  </AppProvider>,
  // </React.StrictMode>
);
