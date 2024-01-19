import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import ReactDOM from "react-dom/client";
// import App from "./App";

// window.addEventListener("click", () => {
//   console.log("window click");
// });

// setTimeout(() => {
//   window.dispatchEvent(new CustomEvent("click"));
// }, 3000);

// setTimeout(() => {
//   const button = document.querySelector("button");
//   button?.dispatchEvent(new CustomEvent("click"));
// }, 3000);

const App = () => {
  // useEffect(() => {
  //   const button = document.querySelector("button");
  //   button?.addEventListener("click", () => {
  //     console.log("button click");
  //   });
  // }, []);

  return (
    <div
      onClick={() => {
        console.log("div click");
      }}
    >
      <h1>Hello array</h1>

      <button
        onClick={(event) => {
          event.stopPropagation();
          console.log("button click");
          event.target.dispatchEvent(new CustomEvent("click"));
        }}
      >
        Click me
      </button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <AppProvider i18n={enTranslations}>
    {/* <main>
        <h1>Setting the Exposure Manually on a Camera</h1>
        <h2>Set the ISO</h2>
      </main> */}

    <App />
  </AppProvider>
  // </React.StrictMode>
);
