import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import ReactDOM from "react-dom/client";
// import App from "./App";

const data: number[] = [1, 2, 3];
const App = () => {
  return (
    <>
      <h1>Hello array</h1>

      {data.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </>
);
